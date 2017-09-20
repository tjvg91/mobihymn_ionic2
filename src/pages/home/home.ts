import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy{
  title: string;
  hymnalList: Array<object>;
  hymnList:object;
  myHttp: Http;
  myGlobal: GlobalService;

  hymnalSubscribe: any;
  hymnSubscribe: any;

  activeHymnal: string;

  constructor(public homeCtrl: NavController, global : GlobalService, http: Http, private platform: Platform) {
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
  }
  
  setActiveHymnal(hymnalId : string){
    let activeHymnal = _.filter(this.hymnalList, function(h){
      return h.id == hymnalId;
    })[0]
    this.myGlobal.setActiveHymnal(activeHymnal['id']);
    this.myGlobal.setActiveHymn('1');
    this.activeHymnal = activeHymnal['id'];

    this.goToReader(true);
  }

  goToReader(enable: boolean){
    this.homeCtrl.parent.getByIndex(1).enabled = enable;
    this.homeCtrl.parent.getByIndex(2).enabled = enable;
    this.homeCtrl.parent.select(1);
  }

  ngOnInit(){
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

  ngOnDestroy(){
    this.hymnalSubscribe.unsubscribe();
    this.hymnSubscribe.unsubscribe();
  }
}