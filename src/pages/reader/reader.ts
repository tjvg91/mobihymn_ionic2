import { Component, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IonicPage, NavController, PopoverController, ModalController, AlertController, ToastController, Gesture, Content, Platform } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { InputModalPage } from '../../pages/input-modal/input-modal';
import { SettingsPopoverPage } from '../../pages/settings-popover/settings-popover';
import { TunePopoverPage } from '../../pages/tune-popover/tune-popover';

import { StatusBar } from '@ionic-native/status-bar'

import * as _ from 'lodash';

/**
 * Generated class for the ReaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reader',
  templateUrl: 'reader.html',
  animations: [
    trigger('scale', [
      state('hidden', style({
        transform: 'scale(0)'
      })),
      state('shown', style({
        transform: 'scale(1)'
      })),
      transition('hidden <=> shown', animate('500ms ease'))
    ]),
    trigger('slideUp', [
      state('up', style({
        transform: 'translate(0px, -63px)'
      })),
      state('down', style({
        transform: 'translate(0px, 0px)'
      })),
      transition('up <=> down', animate('500ms ease'))
    ])
  ]
})

export class ReaderPage implements OnDestroy{
  hymnList: object;
  myGlobal:GlobalService;
  currentHymn: object;
  activeHymnal: string;
  isBookmarked: boolean;
  gesture: Gesture;
  tunes: Array<string>;

  scaleState: string = 'shown';
  slideUpState: string = 'down';
  
  hymnSubscribe: any;
  bookmarksSubscribe: any;
  paddingSubscribe: any;
  themeSubscribe: any;
  fontSubscribe: any;

  extraSpace: Number = 0;
  alignment: string = "left";
  fontSize: number = 1.4;
  themeString: string = "pic";

  curScale: number = 0;

  midi: string = 'data:audio/midi;base64,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';

  safeMidi: SafeResourceUrl

  private lyricsContainer: HTMLElement;
  @ViewChild('readerHeader') divHeader: ElementRef;
  @ViewChild('lyricsContainer') lyricsContainerRef: Content;
  @ViewChild('footerReader') footerReader: ElementRef;
  scrollContent: any;
  divTab: any;

  constructor(public readerCtrl: NavController, public inputPopCtrl: PopoverController, public tunePopCtrl: PopoverController, public inputModalCtrl: ModalController,
                    global: GlobalService, private alertCtrl: AlertController, private toastCtrl: ToastController, private platform: Platform,
                    private domSanitizer: DomSanitizer, private statusBar: StatusBar) {
    this.myGlobal = global;

    this.safeMidi = this.domSanitizer.bypassSecurityTrustResourceUrl(this.midi);

    this.paddingSubscribe = global.paddingChange.subscribe((value) => {
      this.extraSpace = value;
    });

    this.hymnSubscribe = global.activeHymnChange.subscribe((value) => {
      this.activeHymnal = this.myGlobal.getActiveHymnal();
      let hymnList = this.myGlobal.getHymnList()['hymnal' + this.myGlobal.getActiveHymnal()];
      let activeHymn = this.myGlobal.getActiveHymn();
      this.currentHymn = _.filter(hymnList, function(item){
        return item.id == activeHymn;
      })[0];
      let currentHymn = this.currentHymn['number'].replace(/f|s|t/i, "");
      this.tunes = _.filter(hymnList, function(item){
        return new RegExp(currentHymn + "(f|s|t)", "i").test(item['number']);
      });
      this.isBookmarked = global.isInBookmark(this.activeHymnal, this.currentHymn['id']);
    });

    this.bookmarksSubscribe = global.bookmarksChange.subscribe((value) => {
      this.isBookmarked = global.isInBookmark(this.activeHymnal, this.currentHymn['id']);
    });

    this.themeSubscribe = global.themeChange.subscribe((value) => {
      this.themeString = value;
    });

    this.fontSubscribe = global.fontSizeChange.subscribe((value) =>{
      this.fontSize = value;
    });
  }

  presentPopover(myEvent) {
    let popover = this.inputPopCtrl.create(SettingsPopoverPage,{
      ctrl: this,
    });
    popover.present({
      ev: myEvent
    });
  }

  presentTunePopover(myEvent){    
    let popover = this.inputPopCtrl.create(TunePopoverPage,{
      ctrl: this,
      tunes: this.tunes,
      activeHymn: this.currentHymn['number']
    });
    popover.present({
      ev: myEvent
    });
  }

  presentInputModal() {
    let hymns = this.hymnList;
    let inputModal = this.inputModalCtrl.create(InputModalPage, {
      allHymns : hymns,
      activeHymnal : this.activeHymnal,
      globalService: this.myGlobal
    });
    inputModal.present();
  }

  presentConfirmUnbookmark(){
    let confirmUnbookmark = this.alertCtrl.create({
      title: 'Confirm removal',
      message: 'Are you sure you want to remove bookmark?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.myGlobal.removeFromBookmarks(this.activeHymnal, this.currentHymn['id']);
            this.presentUnbookmarkConfirmed();
          }
        }
      ]
    });
    confirmUnbookmark.present();
  }

  presentBookmarkConfirmed(){
    let confirmedBookmark = this.toastCtrl.create({
      message: 'Bookmark added',
      duration: 3000
    });
    confirmedBookmark.present();
  }

  presentUnbookmarkConfirmed(){
    let confirmedUnbookmark = this.toastCtrl.create({
      message: 'Bookmark removed',
      duration: 3000
    });
    confirmedUnbookmark.present();
  }

  ionViewDidLoad() {
    this.activeHymnal = this.myGlobal.getActiveHymnal();
    let hymnList = this.myGlobal.getHymnList()['hymnal' + this.activeHymnal];
    this.hymnList = hymnList;
    let activeHymn = this.myGlobal.getActiveHymn();
    this.currentHymn = _.filter(hymnList, function(item){
      return item.id == activeHymn;
    })[0];
    this.isBookmarked = this.myGlobal.isInBookmark(this.activeHymnal, this.currentHymn);
    this.fontSize = this.myGlobal.getFontSize();
    this.extraSpace = this.myGlobal.getPadding();
    this.themeString = this.myGlobal.getTheme();
    this.alignment = this.myGlobal.getActiveAlignment();
    this.lyricsContainer = this.lyricsContainerRef._elementRef.nativeElement;
    this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
    this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
    let currentHymn = this.currentHymn;
    this.tunes = _.filter(hymnList, function(item){
      return new RegExp(currentHymn['number'] + "(f|s|t)", "i").test(currentHymn['number']);
    });
  }

  ngOnDestroy(){
    this.hymnSubscribe.unsubscribe();
    this.bookmarksSubscribe.unsubscribe();
    this.paddingSubscribe.unsubscribe();
    this.gesture.destroy();
  }

  goToTab(index){
    this.readerCtrl.parent.select(index);
  }

  toggleBookmark(){
    if(this.isBookmarked){
      this.presentConfirmUnbookmark();
    }
    else{
      this.myGlobal.addToBookmarks({
        'hymnalId': this.activeHymnal,
        'hymnId': this.currentHymn['id'],
        'firstLine': this.currentHymn['firstLine'],
        'number': this.currentHymn['number'],
        'title': this.currentHymn['title']
      });
      this.presentBookmarkConfirmed();
    }
  }

  pinchZoom(event){
    var val = this.curScale > event.scale ? -1 : 1
    this.zoom(val);
    this.curScale = event.scale;
  }

  toggleFullLyrics(ev){
    if(ev.tapCount == 1){
      let margUp = "";
      let translateUpTab = "";
      let translateUpFooter = "";

      if(this.platform.is('android') || this.platform.is('core')){
        margUp = '63px 0 100px';
        translateUpTab = 'translate(0, 63px)';
        translateUpFooter = 'translate(0, 115px)';
      }
      else if(this.platform.is('ios')){
        margUp = '44px 0 80px';
        translateUpTab = 'translate(0, 49px)';
        translateUpFooter = 'translate(0, 115px)';
      }
      else{ //windows
        margUp = '115px 0 60px';
        translateUpTab = 'translate(0, -115px)';
        translateUpFooter = 'translate(0, 115px)';
      }

      if(this.scaleState == 'shown'){
        this.scrollContent.animate([
          { offset: 0, 'margin': margUp },
          { offset: 1, 'margin': '0 0 0 0' }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        });
        this.divTab.animate([
          { offset: 0, 'transform': 'translate(0, 0)' },
          { offset: 1, 'transform': translateUpTab }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        });
        this.footerReader.nativeElement.animate([
          { offset: 0, 'transform': 'translate(0, 0)' },
          { offset: 1, 'transform': translateUpFooter }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        });
        this.slideUpState = 'up';
        this.scaleState = 'hidden';
        //this.statusBar.hide();
      }
      else{
        this.scrollContent.animate([
          { offset: 0, margin: '0 0 0 0' },
          { offset: 1, margin: margUp }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        });
        this.divTab.animate([
          { offset: 0, 'transform': translateUpTab },
          { offset: 1, 'transform': 'translate(0, 0)' }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        });
        this.footerReader.nativeElement.animate([
          { offset: 0, 'transform': translateUpFooter },
          { offset: 1, 'transform': 'translate(0, 0)' }
        ],{
          duration: 500,
          easing: 'ease',
          fill: 'forwards'
        })

        this.slideUpState = 'down';
        this.scaleState = 'shown';
        //this.statusBar.show();
      }
    }
  }

  @HostListener('mousewheel', ['$event'])
  scroll(e: WheelEvent) {
      if(e.ctrlKey){
        e.preventDefault();
        this.zoom(Math.sign(e.wheelDelta))
      }
  }

  zoom(sign: number){
    var prod = (0.01 * sign);
    let fontSize = sign < 0 ? Math.max(parseFloat((this.fontSize + prod).toFixed(2)), 1.4) :
                    Math.min(parseFloat((this.fontSize + prod).toFixed(2)), 3.6);
    this.myGlobal.setFontSize(fontSize);
  }
}
