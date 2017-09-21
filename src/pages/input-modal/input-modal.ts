import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Searchbar, AlertController, ToastController } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';

import * as _ from 'lodash';

/**
 * Generated class for the InputModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-modal',
  templateUrl: 'input-modal.html'
})

export class InputModalPage{
  inputType : string;
  myGlobal : GlobalService;
  hymnList: Array<object> = new Array<object>();
  activeHymnal: string;
  activeHymn: string;
  navParams: NavParams
  hymnLimit : Number;
  hymnSubscribe: any;
  hymnFilter: object;
  hymnFilterString: string
  recentList: Array<object>;
  bookmarkList: Array<object>;
  hymnTextFilter: string;

  @ViewChild('bkmkFilter') bkmkFilterSearchbar:Searchbar;
  @ViewChild('hymnFilter') hymnFilterSearchbar:Searchbar;

  origHymnList : Array<object>;
  origBkmkList : Array<object>;
  number: string;
  tune: string;
  keyboardShow: string;

  constructor(public viewCtrl: ViewController, inputParams: NavParams,
            private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.inputType = "all_hymns";
    this.hymnLimit = 5;
    this.navParams = inputParams;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad(){
    this.activeHymnal = this.navParams.get('activeHymnal');
    this.myGlobal = this.navParams.get('globalService');
    
    this.activeHymn = this.myGlobal.getActiveHymn();
    let activeHymn = this.activeHymn
    /*this.hymnFilter = _.filter(this.hymnList, item => {
      return item.id == activeHymn;
    })[0].number;*/
    this.hymnFilter = {
      'number': '',
      'tune': ''
    };

    this.origHymnList = this.navParams.get('allHymns').filter(x => {
      return !/f|s|t/ig.test(x['number']);
    });
    this.recentList = this.myGlobal.getRecentList();    
    this.bookmarkList = this.myGlobal.getBookmarksList();
    this.origBkmkList = this.bookmarkList.map(x => Object.assign({}, x));
    this.hymnList = this.origHymnList.map(x => Object.assign({}, x))

    this.keyboardShow = "shown";
    this.hymnFilterString = _.filter(this.hymnList, item => {
      return item.id == activeHymn;
    })[0].number;

  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.hymnFilterSearchbar.value = this.hymnFilterString;
      this.hymnFilterSearchbar.setFocus();
      this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
      this.filterHymns(null);
    }, 500);
  }

  filterHymns(event){
    let st = ""
    if(event)
      st = event.target.value;
    else
      st = this.hymnFilterSearchbar.value;

    if(st)
      this.hymnList = this.origHymnList.filter((item) => {
        return new RegExp(st).test(item['number']) || new RegExp(st).test(item['firstLine']);
      });
    else
      this.hymnList = this.origHymnList;
  }

  filterBookmarks(event){
    let st = event.target.value;
    if(st)
      this.bookmarkList = this.origBkmkList.filter((item) => {
        return new RegExp(st).test(item['number']) || new RegExp(st).test(item['firstLine']);
      });
    else
      this.bookmarkList = this.origBkmkList;
  }

  preSetActiveHymn(event){
    let tempId = _.filter(this.hymnList, item => {
      return item.number == event;
    })[0].id;
    this.setActiveHymn(tempId);
  }

  setActiveHymn(hymnId){
    this.myGlobal.setActiveHymn(hymnId);
    this.viewCtrl.dismiss();
  }

  getIndicator() : string{
    let limit = this.hymnLimit;
    let length = this.hymnList.length;
    return 'Displaying ' + Math.min(+limit, length) + ' of ' + this.hymnList.length + ' hymns';
  }

  bkmkSelect(){
    setTimeout(() => {
      this.bkmkFilterSearchbar.setFocus();
    }, 200);    
  }

  hymnSelect(){
    setTimeout(() => {
      this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
      this.hymnFilterSearchbar.setFocus();
    }, 200);    
  }

  handleKeyChange(inp){
    if(inp.go != true){
      this.number = inp.outs;
      this.tune = inp.tune;
      this.hymnFilter['number'] = this.number;
      this.hymnFilter['tune']= this.tune;

      this.hymnFilterString = this.hymnFilter['number'] + this.hymnFilter['tune'];

      let num = this.hymnFilter['number'];
      let tune = this.hymnFilter['tune'];
      this.hymnList = this.origHymnList.filter((item) => {
        return new RegExp(num + '' + tune).test(item['number']);
      });
    }
    else{
      let activeHymn = this.hymnFilterString;
      let hymnIds = this.origHymnList.filter(x => {
        return x['number'] == activeHymn
      });
      if(hymnIds.length > 0)
        this.setActiveHymn(hymnIds[0]['id']);
    }
  }

  showKeyboard(){
    setTimeout(function() {
      this.keyboardShow = "shown";
      console.log(this.keyboardShow);
    }, 100);
    
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
            this.myGlobal.removeFromBookmarks(this.activeHymnal, this.activeHymn);
            this.presentUnbookmarkConfirmed();
          }
        }
      ]
    });
    confirmUnbookmark.present();
  }

  presentUnbookmarkConfirmed(){
    let confirmedUnbookmark = this.toastCtrl.create({
      message: 'Bookmark removed',
      duration: 3000
    });
    confirmedUnbookmark.present();
  }
}

