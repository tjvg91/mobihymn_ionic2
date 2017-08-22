import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs';

import { GlobalService } from '../services/global-service';

import { TabsPage } from '../pages/tabs/tabs';

import { File } from '@ionic-native/file';
import { Insomnia } from '@ionic-native/insomnia';

@Component({
  templateUrl: 'app.html',
  providers: [GlobalService, File]
})
export class MyApp{
  rootPage:any = TabsPage;
  onPauseSubscription : Subscription

  android: boolean;
  ios: boolean;
  wp: boolean;

  storage: string;

  MAIN_FOLDER_NAME: string = "MobiHymn";
  BOOKMARKS_JSON_NAME: string = "bookmarks.json";
  HISTORY_JSON_NAME: string = "history.json";
  SETTINGS_JSON_NAME: string = "settings.json";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private global : GlobalService,
              private file: File, private insomnia: Insomnia) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      insomnia.keepAwake();

      this.android = platform.is('android');
      this.ios = platform.is('ios');
      this.wp = platform.is('wp');

      this.storage = this.android ? file.externalRootDirectory : file.dataDirectory;
      this.file.checkDir(this.storage, this.MAIN_FOLDER_NAME).then(() =>{
        this.checkBookmarks("read");
        this.checkHistory("read");
        this.checkSettings("read");
      }).catch(() => {
        this.file.createDir(this.storage, this.MAIN_FOLDER_NAME, false).then(() =>{
          this.checkBookmarks("read");
          this.checkHistory("read");
          this.checkSettings("read");
        });
      });
    });
    this.onPauseSubscription = platform.pause.subscribe(() => {
      this.file.checkDir(this.storage, this.MAIN_FOLDER_NAME).then(() => {
        this.checkBookmarks("write");
        this.checkHistory("write");
        this.checkSettings("write");
      }).catch(() => {
        this.file.createDir(this.storage, this.MAIN_FOLDER_NAME, false).then(() =>{
          this.checkBookmarks("write");
          this.checkHistory("write");
          this.checkSettings("write");
        });
      });
    });
  }

  checkBookmarks(mode: string){
    this.file.checkFile(this.storage, this.BOOKMARKS_JSON_NAME).then(() => {
      if(mode == "write")
        this.writeBookmarks(true);
      else if (mode == "read")
        this.readBookmarks();
    }).catch(() => {
      this.file.createDir(this.storage, this.BOOKMARKS_JSON_NAME, false).then(() => {
        if(mode == "write")
          this.writeBookmarks(false);
      });
    });
  }

  writeBookmarks(exists: boolean){
    var data = this.global.getBookmarksList();
    if(!exists)
      this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.BOOKMARKS_JSON_NAME,
                          JSON.stringify(data), {
                            append: false, replace: true
                          });
    else
      this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.BOOKMARKS_JSON_NAME,
                          JSON.stringify(data));
  }

  readBookmarks(){
    this.file.readAsText(this.storage, this.BOOKMARKS_JSON_NAME).then((data) => {
      this.global.addToBookmarks(JSON.parse(data));
    })
  }

  checkHistory(mode: string){
    this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.HISTORY_JSON_NAME).then(() => {
      if(mode == "write")
        this.writeHistory(true);
      else
        this.readHistory();
    }).catch(() => {
      this.file.createDir(this.storage, this.MAIN_FOLDER_NAME + '/' + this.HISTORY_JSON_NAME, false).then(() => {
        if(mode =="write")
          this.writeHistory(false);
      })
    })
  }

  writeHistory(exists: boolean){
    var data = this.global.getRecentList();
    if(!exists)
      this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME,
                          JSON.stringify(data), {
                            append: false, replace: true
                          });
    else
      this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME,
                          JSON.stringify(data));
  }

  readHistory(){
    this.file.readAsText(this.storage, this.HISTORY_JSON_NAME).then((data) => {
      this.global.addToRecent(JSON.parse(data));
    })
  }

  checkSettings(mode: string){
    this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.SETTINGS_JSON_NAME).then(() => {
      if(mode == "write")
        this.writeSettings(true);
      else
        this.readSettings();
    }).catch(() => {
      this.file.createDir(this.storage, this.SETTINGS_JSON_NAME, false).then(() => {
        this.writeSettings(false);
      })
    })
  }

  writeSettings(exists: boolean){
    var data = {
      'activeHymnal' : this.global.getActiveHymnal(),
      'activeHymn' : this.global.getActiveHymn(),
      'recentCount': this.global.getRecentCount(),
      'extraSpace': this.global.getPadding(),
      'alignment': this.global.getActiveAlignment(),
      'fontSize' : this.global.getFontSize()
    }
    if(!exists)
      this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME,
                          JSON.stringify(data), {
                            append: false, replace: true
                          });
    else
      this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME,
                          JSON.stringify(data));
  }

  readSettings(){
    this.file.readAsText(this.storage, this.HISTORY_JSON_NAME).then((data) => {
      let jsonData  = JSON.parse(data);
      this.global.setActiveHymnal(jsonData["activeHymnal"]);
      this.global.setActiveHymn(jsonData["activeHymn"]);
      this.global.setFontSize(jsonData["fontSize"]);
      this.global.setRecentCount(jsonData["recentCount"]);
      this.global.setPadding(jsonData["extraSpace"]);
      this.global.setActiveAlignment(jsonData["alignment"]);
    })
  }
}
