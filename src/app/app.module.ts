import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GlobalService } from '../services/global-service';

//import { KeyboardComponent } from '../components/keyboard/keyboard';

import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { ReaderPage } from '../pages/reader/reader';
import { SearchPage } from '../pages/search/search';
import { InputModalPage } from '../pages/input-modal/input-modal';
import { AuthorModalPage } from '../pages/author-modal/author-modal';
import { RevisionsModalPage } from '../pages/revisions-modal/revisions-modal';
import { SettingsPopoverPage } from '../pages/settings-popover/settings-popover';
import { TunePopoverPage } from '../pages/tune-popover/tune-popover';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPopoverItemsPage } from '../pages/settings-popover-items/settings-popover-items';
import { SettingsPopoverListPage } from '../pages/settings-popover-list/settings-popover-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Insomnia } from '@ionic-native/insomnia';
import { Media } from '@ionic-native/media';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    ReaderPage,
    SearchPage,
    HomePage,
    TabsPage,
    InputModalPage,
    SettingsPopoverPage,
    AuthorModalPage,
    RevisionsModalPage,
    TunePopoverPage,
    SettingsPopoverItemsPage,
    SettingsPopoverListPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    ReaderPage,
    SearchPage,
    TabsPage,
    InputModalPage,
    SettingsPopoverPage,
    AuthorModalPage,
    RevisionsModalPage,
    TunePopoverPage,
    SettingsPopoverItemsPage,
    SettingsPopoverListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Insomnia,
    File,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
  ]
})
export class AppModule {}

declare var Hammer: any;

export class HammerConfig extends HammerGestureConfig{
  buildHammer(element: HTMLElement){
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}
