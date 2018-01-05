import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { Network } from '@ionic-native/network';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy{
  title: string;
  hymnalList: Array<object>;
  hymnList:object;
  myHttp: Http;
  myGlobal: GlobalService;
  readerLoader: any;
  isOnline: boolean = true;

  hymnalSubscribe: any;
  activeHymnalSubscribe: any;

  activeHymnal: string;
  
  firebaseRegEx: RegExp = /https\:\/\/[^/]*\//;
  firebaseStorage = '/storageapi/';

  constructor(public homeCtrl: NavController, global : GlobalService, http: Http, private platform: Platform,
              private loadingCtrl: LoadingController, private network: Network) {
    this.title = "MobiHymn";
    this.myGlobal = global;

    this.myHttp = http;

    this.hymnalSubscribe = global.hymnalChange.subscribe((value) => {
      this.hymnalList = value;
      let hom = this;
      if(this.isOnline){
        for(var i = 0; i < this.hymnalList.length; i++){
          this.myGlobal.firebaseStorage.child('hymnal' + (i + 1) + '.jpg').getDownloadURL().then(function(url){
            var index = parseInt(/hymnal[0-9]/.exec(url)[0].replace('hymnal', '')) - 1;
            hom.hymnalList[index]['image'] = url.replace(hom.firebaseRegEx, hom.firebaseStorage);
          });
        }
      }
    });

    this.activeHymnalSubscribe = global.activeHymnalChange.subscribe(val =>{
      if(val){
        this.activeHymnal = val;
      }

      let hom = this;
      this.myGlobal.getHymns(this.myHttp, parseInt(hom.activeHymnal)).subscribe(res1 => {
        this.myGlobal.addToHymns('hymnal' + hom.activeHymnal, res1);   
      }, err => {
        console.log(hom.network);
        this.myGlobal.firebaseAuth.onAuthStateChanged(function(user){
          hom.showLoader();
          hom.myGlobal.firebaseStorage.child('hymnal ' + hom.activeHymnal + '.json').getDownloadURL().then(function(url){
            var newUrl = url.replace(hom.firebaseRegEx, hom.firebaseStorage);
            hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
              hom.myGlobal.addToHymns('hymnal' + hom.activeHymnal, x);
              hom.myGlobal.setActiveHymn('1');
              hom.dismissLoader();
              hom.goToReader(true);
            })
          });
        })
      });
    });

    let hom = this;
    this.myGlobal.getSoundfonts().then(function(instru){
      hom.myGlobal.instrument['data'] = instru;
    });
  }
  
  setActiveHymnal(hymnalId : string){
    let activeHymnal = _.filter(this.hymnalList, function(h){
      return h.id == hymnalId;
    })[0]
    this.myGlobal.setActiveHymnal(activeHymnal['id']);
  }

  goToReader(enable: boolean){
    this.homeCtrl.parent.getByIndex(0).enabled = enable;
    this.homeCtrl.parent.getByIndex(1).enabled = enable;
    this.homeCtrl.parent.select(0);
  }

  ionViewDidLoad(){
    if(this.platform.is('cordova')){
      this.platform.ready().then(() => {
        this.retrieveHymnals();
      });
    }
    else{
      this.retrieveHymnals();
    }
  }

  retrieveHymnals(){
    let hom = this;
    this.myGlobal.getHymnals(this.myHttp).subscribe(res => {
      this.isOnline = false;
      this.myGlobal.setHymnals(res.output);
    }, err => {
      this.myGlobal.firebaseAuth.onAuthStateChanged(function(user){
        hom.myGlobal.firebaseStorage.child('hymnals.json').getDownloadURL().then(function(url){
          var newUrl = url.replace(hom.firebaseRegEx, hom.firebaseStorage);
          hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
            hom.myGlobal.setHymnals(x.output);
          })
        });
      })
    });
    this.activeHymnal = this.myGlobal.getActiveHymnal();
  }

  showLoader() {
    this.readerLoader = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'circles'
    });

    this.readerLoader.present();
  }

  dismissLoader(){
    this.readerLoader.dismiss();
  }

  ngOnDestroy(){
    this.hymnalSubscribe.unsubscribe();
    this.activeHymnalSubscribe.unsubscribe();
  }
}