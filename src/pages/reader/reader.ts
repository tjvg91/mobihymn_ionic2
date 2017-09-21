import { Component, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { IonicPage, NavController, PopoverController, ModalController, AlertController, ToastController, Gesture, FabButton, Content, Platform } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { InputModalPage } from '../../pages/input-modal/input-modal';
import { SettingsPopoverPage } from '../../pages/settings-popover/settings-popover';
import { TunePopoverPage } from '../../pages/tune-popover/tune-popover';

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

  extraSpace: Number = 0;
  alignment: string = "left";
  fontSize: number = 1.4;
  themeString: string = "pic";

  private lyricsContainer: HTMLElement;
  @ViewChild('lyricsContainer') lyricsContainerRef: Content;
  @ViewChild('btnPlay') btnPlayElemRef: FabButton;
  @ViewChild('readerHeader') divHeader: ElementRef;
  scrollContent: any;
  divTab: any;

  constructor(public readerCtrl: NavController, public inputPopCtrl: PopoverController, public tunePopCtrl: PopoverController, public inputModalCtrl: ModalController, global: GlobalService, private alertCtrl: AlertController, private toastCtrl: ToastController, private platform: Platform) {
    this.myGlobal = global;

    this.paddingSubscribe = global.paddingChange.subscribe((value) => {
      this.extraSpace = value;
    },)

    this.hymnSubscribe = global.activeHymnChange.subscribe((value) => {
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
    })
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
    this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
    this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
    let currentHymn = this.currentHymn;
    this.tunes = _.filter(hymnList, function(item){
      return /[0-9]+(f|s|t)/i.test(currentHymn['number']);
    });
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.lyricsContainer = this.lyricsContainerRef._elementRef.nativeElement;
      this.gesture = new Gesture(this.lyricsContainer);
      this.gesture.listen();
      this.gesture.on('pinch', e => this.pinchZoom(e));      
    }, 500);
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
    this.zoom(Math.sign(event.scale));
  }

  toggleFullLyrics(ev){
    let margUp = "";
    let translateUp = "";

    if(this.platform.is('android') || this.platform.is('core')){
      margUp = '63px 0';
      translateUp = 'translate(0, 63px)';
    }
    else if(this.platform.is('ios')){
      margUp = '44px 0 49px';
      translateUp = 'translate(0, 49px)';
    }
    else{ //windows
      margUp = '115px 0 0';
      translateUp = 'translate(0, -115px)';
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
        { offset: 1, 'transform': translateUp }
      ],{
        duration: 500,
        easing: 'ease',
        fill: 'forwards'
      });
      this.slideUpState = 'up';
      this.scaleState = 'hidden';
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
        { offset: 0, 'transform': translateUp },
        { offset: 1, 'transform': 'translate(0, 0)' }
      ],{
        duration: 500,
        easing: 'ease',
        fill: 'forwards'
      });

      this.slideUpState = 'down';
      this.scaleState = 'shown';
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
    var prod = (0.2 * sign);
    this.fontSize = parseFloat((this.fontSize + prod).toFixed(2));
    let fontSize = this.fontSize
    this.myGlobal.setFontSize(fontSize);
  }
}
