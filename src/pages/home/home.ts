import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { Network } from '@ionic-native/network';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer'
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
  isCordova: boolean = false;

  hymnalSubscribe: any;
  activeHymnalSubscribe: any;

  activeHymnal: string;
  
  firebaseRegEx: RegExp = /https\:\/\/[^/]*\//;
  firebaseStorage = '/storageapi/';
  fileTransferObj: FileTransferObject;

  constructor(public homeCtrl: NavController, global : GlobalService, http: Http, private platform: Platform,
              private loadingCtrl: LoadingController, private network: Network, private fileTransfer: FileTransfer) {
    this.title = "MobiHymn";
    this.myGlobal = global;

    this.myHttp = http;
    let hom = this;

    this.fileTransferObj = fileTransfer.create();

    this.hymnalSubscribe = global.hymnalChange.subscribe((value) => {
      this.hymnalList = value;
      if(this.isOnline){
        for(var i = 0; i < this.hymnalList.length; i++){
          this.myGlobal.firebaseStorage.child('hymnal' + (i + 1) + '.jpg').getDownloadURL().then(function(url){
            var index = parseInt(/hymnal[0-9]/.exec(url)[0].replace('hymnal', '')) - 1;
            hom.hymnalList[index]['image'] = hom.platform.is('cordova') ? url :url.replace(hom.firebaseRegEx, hom.firebaseStorage);
          });
        }
      }
    });

    this.activeHymnalSubscribe = global.activeHymnalChange.subscribe(val => {
      if(val){
        this.activeHymnal = val;
          this.myGlobal.getHymns(this.myHttp, parseInt(hom.activeHymnal)).subscribe(res1 => {
            this.myGlobal.addToHymns('hymnal' + hom.activeHymnal, res1);
          }, err => {
            hom.isOnline = true;

            if(this.isCordova){
              let confirmDownload = this.alertCtrl.create({
                title: 'Download Confirm',
                message: 'Do you want to download the hymnal?',
                buttons: [
                  {
                    text: 'No',
                    handler: () => {}
                  },
                  {
                    text: 'Yes',
                    handler: () => {
                      let target = hom.platform.is('android') ? hom.file.externalRootDirectory :
                                    hom.file.documentsDirectory;
                      target += '/MobiHymn/hymnal ' + hom.activeHymnal + '.json';
                      hom.myGlobal.firebaseStorage.child('hymnal ' + hom.activeHymnal + '.json').getDownloadURL().then(function(url){
                        var newUrl = hom.platform.is('cordova') ? url :
                                url.replace(hom.firebaseRegEx, hom.firebaseStorage);
                        hom.fileTransferObj.download(hom.hymnalUrl, target, true).then(x => {
                          hom.myGlobal.addToHymns('hymnal' + hom.activeHymnal, x);
                          hom.myGlobal.setActiveHymn('1');
                        })
                      });
                    }
                  }
                ]
              });
              confirmDownload.present();
            }
            else{
              this.myGlobal.firebaseAuth.onAuthStateChanged(function(user){
                hom.showLoader();
                hom.myGlobal.firebaseStorage.child('hymnal ' + hom.activeHymnal + '.json').getDownloadURL().then(function(url){
                  var newUrl = hom.platform.is('cordova') ? url :
                          url.replace(hom.firebaseRegEx, hom.firebaseStorage);
                  hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
                    hom.myGlobal.addToHymns('hymnal' + hom.activeHymnal, x);
                    hom.myGlobal.setActiveHymn('1');
                    hom.dismissLoader();
                    hom.goToReader(true);
                  })
                });
              })
            }
          });
        }
      }
    });

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
      this.isCordova = true;
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
          var newUrl = hom.platform.is('cordova') ? url :
                       url.replace(hom.firebaseRegEx, hom.firebaseStorage);
          hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
            hom.myGlobal.setHymnals(x.output);
          }, err => alert(err));
        }).catch(function(err){
          alert(err);
        });
      })
    });
    this.activeHymnal = this.myGlobal.getActiveHymnal();
  }

  showLoader() {
    this.readerLoader = this.loadingCtrl.create({
      content: 'Fetching hymns...',
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