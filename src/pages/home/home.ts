import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform, LoadingController, AlertController } from 'ionic-angular';
import { GlobalService } from '../../services/global-service';
import { Network } from '@ionic-native/network';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy{
  title: string;
  hymnalList: Array<object>;
  offlineHymnalList: Array<object>;
  onlineHymnalList: Array<object>;
  hymnList:object;
  myHttp: Http;
  myGlobal: GlobalService;
  readerLoader: any;
  isOnline: boolean = true;
  isCordova: boolean = false;

  hymnalSubscribe: any;
  activeHymnalSubscribe: any;

  activeHymnal: string;
  progressIndicator: string = "0";
  
  firebaseRegEx: RegExp = /https\:\/\/[^/]*\//;
  firebaseStorage = '/storageapi/';
  fileTransferObj: FileTransferObject;

  constructor(public homeCtrl: NavController, global : GlobalService, http: Http, private platform: Platform,
              private loadingCtrl: LoadingController, private network: Network, private fileTransfer: FileTransfer,
              private alertCtrl: AlertController, private file: File) {
    this.title = "MobiHymn";
    this.myGlobal = global;

    this.myHttp = http;
    let hom = this;

    this.fileTransferObj = fileTransfer.create();

    this.hymnalSubscribe = global.hymnalChange.subscribe((value) => {
      this.hymnalList = value;
    });

    this.activeHymnalSubscribe = global.activeHymnalChange.subscribe(val => {
      if(val){
        this.activeHymnal = val;
        this.myGlobal.getHymns(this.myHttp, parseInt(hom.activeHymnal)).subscribe(res1 => {
          this.myGlobal.addToHymns('hymnal' + hom.activeHymnal, res1);
          let curHymn = this.myGlobal.getActiveHymn();
          if(!curHymn)
            this.myGlobal.setActiveHymn('1');
          this.goToReader(true);
        }, err => {
          hom.isOnline = true;

          if(this.isCordova){
            let target = hom.platform.is('android') ? hom.file.externalRootDirectory :
                          hom.file.documentsDirectory;
            target += '/MobiHymn/hymnal ' + hom.activeHymnal + '.json';
            hom.myGlobal.firebaseStorage.child('hymnal ' + hom.activeHymnal + '.json').getDownloadURL().then(function(url){
              var newUrl = hom.platform.is('cordova') ? url :
                      url.replace(hom.firebaseRegEx, hom.firebaseStorage);
              let progressLoad = hom.loadingCtrl.create({
                content: 'Downloading 0%...',
                spinner: 'circles'
              });
              progressLoad.present();
              hom.fileTransferObj.onProgress(x => {
                let progressIndicator = ((x.loaded / x.total) * 100).toFixed(0);
                progressLoad.setContent('Downloading ' + progressIndicator + '%...');
              })
              hom.fileTransferObj.download(newUrl, target, true).then(x => {
                progressLoad.dismiss();
                hom.myGlobal.getHymns(hom.myHttp, parseInt(hom.activeHymnal)).subscribe(x =>{
                  hom.myGlobal.addToHymns('hymnal' + hom.activeHymnal, x);
                  let activeHymn = hom.myGlobal.getActiveHymn();
                  if(!activeHymn)
                    hom.myGlobal.setActiveHymn('1');
                  let item = hom.hymnalList.filter(function(y){
                    return y['id'] = hom.activeHymnal
                  })[0];
                  hom.offlineHymnalList.push(item);
                  hom.saveHymnals();
                  hom.goToReader(true);
                }, err => {
                  alert(err);
                });
                
              }, err => {
                progressLoad.dismiss();
                let downloadErr = hom.alertCtrl.create({
                  title: 'Error',
                  message: 'Error downloading! Check internet connection.',
                  buttons: [{
                    text: 'OK',
                    handler: () => {
                      downloadErr.dismiss();
                    }
                  }]
                });
                downloadErr.present();               
              })
            });
          }
          else{
            this.myGlobal.firebaseAuth.onAuthStateChanged(function(user){
              if(user){
                hom.showLoader();
                hom.myGlobal.firebaseStorage.child('hymnal ' + hom.activeHymnal + '.json').getDownloadURL().then(function(url){
                  var newUrl = hom.platform.is('cordova') ? url :
                          url.replace(hom.firebaseRegEx, hom.firebaseStorage);
                  hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
                    hom.myGlobal.addToHymns('hymnal' + hom.activeHymnal, x)
                    hom.myGlobal.setActiveHymn('1');
                    hom.dismissLoader();
                    hom.goToReader(true);
                  })
                });
              }
            })
          }
        });
      }
    });

    this.myGlobal.getSoundfonts().then(function(instru){
      hom.myGlobal.soundfont = instru;
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
      this.activeHymnal = this.myGlobal.getActiveHymnal();
      this.isCordova = true;
      this.network.onConnect().subscribe(data => {
        this.isOnline = true;
        if(this.hymnalList == undefined){
          let hom = this;
          if(!hom.myGlobal.isAuthenticated)
            this.myGlobal.firebaseAuth.signInWithEmailAndPassword("tim.gandionco@gmail.com", "Tjvg1991");
          hom.retrieveHymnals();
        }
      });
      this.network.onDisconnect().subscribe(data => {
        this.isOnline = false;
      });
      this.retrieveHymnals();
    }
    else{
      this.isOnline = navigator.onLine;
      this.retrieveHymnals();
    }
  }

  getHymnalsFirebase(){
    return this.myGlobal.firebaseStorage.child('hymnals.json').getDownloadURL();
  }

  retrieveHymnals(){
    let hom = this;
    this.myGlobal.getHymnals(this.myHttp).subscribe(res => {
      this.myGlobal.setHymnals(res.output);
      this.offlineHymnalList = res.output;
      this.onlineHymnalList = _.difference(this.hymnalList, this.offlineHymnalList)
    });
    this.myGlobal.firebaseAuth.onAuthStateChanged(function(user){
      if(user){
        hom.getHymnalsFirebase().then(function(url){
          var newUrl = hom.platform.is('cordova') ? url :
                      url.replace(hom.firebaseRegEx, hom.firebaseStorage);
          hom.myHttp.get(newUrl).map(x => x.json()).subscribe(x => {
            hom.myGlobal.setHymnals(x.output);
            hom.onlineHymnalList = _.difference(hom.hymnalList, hom.offlineHymnalList)
          });
        }).catch(function(err){
        });
      }
    });
    this.activeHymnal = this.myGlobal.getActiveHymnal();
  }

  saveHymnals(){
    let url = ""
    if(this.platform.is('android'))
        url = this.file.externalRootDirectory + '/MobiHymn/hymnals.json';
    else if(this.platform.is('ios'))
        url = this.file.documentsDirectory + '/MobiHymn/hymnals.json';
    this.myHttp.post(url, this.offlineHymnalList);
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