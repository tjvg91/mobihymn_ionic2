import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
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

  hymnalSubscribe: any;
  activeHymnalSubscribe: any;

  activeHymnal: string;

  constructor(public homeCtrl: NavController, global : GlobalService, http: Http, private platform: Platform, private loadingCtrl: LoadingController) {
    this.title = "MobiHymn";
    this.myGlobal = global;

    this.myHttp = http;

    this.hymnalSubscribe = global.hymnalChange.subscribe((value) => {
      this.hymnalList = value;

      for(var i = 0; i < this.hymnalList.length; i++){
        let hymnalID = this.hymnalList[i]['id'];
        this.myGlobal.getHymns(this.myHttp, hymnalID).subscribe(res1 => {
          this.myGlobal.addToHymns('hymnal' + hymnalID, res1);

        });
      }
    });

    this.activeHymnalSubscribe = global.activeHymnalChange.subscribe(val =>{
      if(val){
        this.activeHymnal = val;
        this.goToReader(true);
      }
    });

    let hom = this;
    this.myGlobal.getSoundfonts().then(function(instru){
      hom.myGlobal.instrument['data'] = instru;
    })
  }
  
  setActiveHymnal(hymnalId : string){
    this.showLoader();
    let activeHymnal = _.filter(this.hymnalList, function(h){
      return h.id == hymnalId;
    })[0]
    this.dismissLoader();
    this.myGlobal.setActiveHymnal(activeHymnal['id']);
    this.myGlobal.setActiveHymn('1');
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
    this.myGlobal.getHymnals(this.myHttp).subscribe(res => {
      this.myGlobal.setHymnals(res.output);
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