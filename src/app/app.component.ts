import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs';

import { GlobalService } from '../services/global-service';

import { TabsPage } from '../pages/tabs/tabs';

import { File } from '@ionic-native/file';

@Component({
  templateUrl: 'app.html',
  providers: [GlobalService, File]
})
export class MyApp{
  rootPage:any = TabsPage;
  onResumeSubscription : Subscription

  android: boolean;
  ios: boolean;
  wp: boolean;

  storage: string;

  MAIN_FOLDER_NAME: string = "MobiHymn";
  BOOKMARKS_JSON_NAME: string = "bookmarks.json";
  HISTORY_JSON_NAME: string = "history.json";
  SETTINGS_JSON_NAME: string = "settings.json";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private global : GlobalService,
              private file: File) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.android = platform.is('android');
      this.ios = platform.is('ios');
      this.wp = platform.is('wp');

      this.storage = this.android ? file.externalRootDirectory : file.dataDirectory;

    });
    this.onResumeSubscription = platform.pause.subscribe(() => {
      this.file.checkDir(this.storage, this.MAIN_FOLDER_NAME).then(() => {

      }).catch(() => {
        this.file.createDir(this.storage, this.MAIN_FOLDER_NAME, false).then(() =>{

        })
      })
    });
  }

  checkBookmarks(){
    this.file.checkFile(this.storage, this.BOOKMARKS_JSON_NAME).then(() => {
      this.writeBookmarks(true);
    }).catch(() => {
      this.file.createDir(this.storage, this.BOOKMARKS_JSON_NAME, false).then(() => {
        this.writeBookmarks(false);
      })
    })
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

  checkHistory(){
    this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.HISTORY_JSON_NAME).then(() => {
      this.writeBookmarks(true);
    }).catch(() => {
      this.file.createDir(this.storage, this.MAIN_FOLDER_NAME + '/' + this.HISTORY_JSON_NAME, false).then(() => {
        this.writeBookmarks(false);
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

  checkSettings(){
    this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.SETTINGS_JSON_NAME).then(() => {
      this.writeSettings(true);
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
}
