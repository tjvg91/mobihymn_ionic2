import { Component, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { IonicPage, NavController, PopoverController, ModalController, AlertController, ToastController, Gesture, Content, Platform } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { InputModalPage } from '../../pages/input-modal/input-modal';
import { SettingsPopoverPage } from '../../pages/settings-popover/settings-popover';
import { TunePopoverPage } from '../../pages/tune-popover/tune-popover';
import { MidiPopoverPage } from '../../pages/midi-popover/midi-popover';

import { StatusBar } from '@ionic-native/status-bar'
import { File } from '@ionic-native/file';
import * as _ from 'lodash';
import * as MidiPlayer from 'midi-player-js';
import * as SoundFont from 'soundfont-player';

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
  fontSizeSubscribe: any;
  fontNameSubscribe: any;
  alignmentSubscribe: any;

  extraSpace: Number = 0;
  alignment: string = "left";
  fontSize: number = 1.4;
  themeString: string = "pic";
  fontName: string = "Roboto";

  curScale: number = 0;

  mdiPlayer: any;
  mdiLength: any = 0;
  mdiCur: any = 0;
  mdiSound: any;
  ac: AudioContext;

  private lyricsContainer: HTMLElement;
  @ViewChild('readerHeader') divHeader: ElementRef;
  @ViewChild('lyricsContainer') lyricsContainerRef: Content;
  @ViewChild('footerReader') footerReader: ElementRef;
  scrollContent: any;
  divTab: any;

  constructor(public readerCtrl: NavController, public inputPopCtrl: PopoverController, public tunePopCtrl: PopoverController, public inputModalCtrl: ModalController,
                    global: GlobalService, private alertCtrl: AlertController, private toastCtrl: ToastController, private platform: Platform,
                    private statusBar: StatusBar, private file: File) {
    this.myGlobal = global;

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
      let currentHymnNum = this.currentHymn['number'].replace(/f|s|t/i, "");
      this.tunes = _.filter(hymnList, function(item){
        return new RegExp('^' + currentHymnNum + "(f|s|t)", "i").test(item['number']);
      });
      this.isBookmarked = global.isInBookmark(this.activeHymnal, this.currentHymn['id']);
      this.scrollContent.scrollTop = 0;
    });

    this.bookmarksSubscribe = global.bookmarksChange.subscribe((value) => {
      this.isBookmarked = global.isInBookmark(this.activeHymnal, this.currentHymn['id']);
    });

    this.themeSubscribe = global.themeChange.subscribe((value) => {
      this.themeString = value;
    });

    this.fontSizeSubscribe = global.fontSizeChange.subscribe((value) =>{
      this.fontSize = value;
    });

    this.fontNameSubscribe = global.fontNameChange.subscribe((value) => {
      this.fontName = value;
    });

    this.alignmentSubscribe = global.activeAlignmentChange.subscribe((value) => {
      this.alignment = value;
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

  presentMidiPopover(myEvent){
    let inputModal = this.inputPopCtrl.create(MidiPopoverPage, {
      reader : this
    });
    inputModal.present({
      ev: myEvent
    });
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
    this.fontName = this.myGlobal.getFontName();
    this.lyricsContainer = this.lyricsContainerRef._elementRef.nativeElement;
    this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
    this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
    let currentHymn = this.currentHymn;
    this.tunes = _.filter(hymnList, function(item){
      return new RegExp('^' + currentHymn['number'] + "(f|s|t)", "i").test(item['number']);
    });    
    this.initializePlayer();

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
      let margUp = "";
      let translateUpTab = "";
      let translateUpFooter = "";
      

      if(this.platform.is('android') || this.platform.is('core')){
        margUp = '63px 0 100px';
        translateUpTab = 'translate(0, 63px)';
        translateUpFooter = 'translate(0, 123px)';
      }
      else if(this.platform.is('ios')){
        margUp = '44px 0 80px';
        translateUpTab = 'translate(0, 51px)';
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

  @HostListener('mousewheel', ['$event'])
  scroll(e: WheelEvent) {
      if(e.ctrlKey){
        e.preventDefault();
        this.zoom(Math.sign(e.wheelDelta))
      }
  }

  zoom(sign: number){
    var prod = (0.1 * sign);
    let fontSize = sign < 0 ? Math.max(parseFloat((this.fontSize + prod).toFixed(2)), 1.4) :
                    Math.min(parseFloat((this.fontSize + prod).toFixed(2)), 3.6);
    this.myGlobal.setFontSize(fontSize);
  }

  initializePlayer(){
    let read = this;
    this.mdiPlayer = new MidiPlayer.Player(function(x) {
      console.log(x);
      if(x.name && x.name == "Note on"){
        read.mdiSound.play(x.noteNumber, read.ac.currentTime, {
          gain: x['velocity'] / 100
        });
      }
      read.mdiLength = parseInt(read.mdiPlayer.getSongTime());
      read.mdiCur = read.mdiLength - read.mdiPlayer.getSongTimeRemaining();
    });
    this.mdiPlayer.on('playing', function(){
      read.mdiCur = read.mdiLength - read.mdiPlayer.getSongTimeRemaining();
    });
    this.mdiPlayer.on('endOfFile', function(){
      read.mdiPlayer.stop();
    })

    let loc = this.platform.is('android') ? (this.file.externalRootDirectory + '/') :
            this.platform.is('cordova') ? (this.file.documentsDirectory + '/') :
            '';
    this.mdiPlayer.loadDataUri('data:audio/midi;base64,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');
    this.mdiLength = parseInt(this.mdiPlayer.getSongTime());
    this.mdiCur = Math.max(0, parseInt(this.mdiPlayer.getSongTimeRemaining()));

    this.ac = new AudioContext();
    SoundFont.instrument(this.ac, loc + 'assets/js/soundfonts/acoustic_grand_piano-mp3.js')
      .then(function(instru){
        read.mdiSound = instru;
      })
  }

  playTrack(){
    this.mdiPlayer.play();
  }

  pauseTrack(){
    this.mdiPlayer.pause();
  }

  stopTrack(){
    this.mdiPlayer.stop();
    this.mdiCur = 0;
  }

  mdiChange(ev){
    this.mdiPlayer.skipToSeconds(this.mdiCur);
  }

  secsToMins(secs){
    let num: number = secs;
    num /= 60;
    num = parseInt(num + '');
    return this.pad(num, 2) + ":" +  this.pad(secs % 60, 2);
  }

  pad(num, size) {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
  }
}
