import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { GlobalService } from '../../services/global-service';

@IonicPage()
@Component({
  selector: 'page-settings-popover',
  templateUrl: 'settings-popover.html',
})
export class SettingsPopoverPage {
  paddingText: Number;
  alignmentText: string;
  themeText: string;
  global: GlobalService;
  activeFontSize: number;

  fontSizes: Array<number> = [1.4, 1.9, 2.4, 2.9, 3.4];

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    let main = this.navParams.get('ctrl');
    this.global = main['myGlobal'];
    this.paddingText = this.global.getPadding();
    this.alignmentText = this.global.getActiveAlignment();
    this.themeText = this.global.getTheme();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  paddingChange(){
    this.global.setPadding(this.paddingText);
    let reader = this.navParams.get('ctrl');
    reader.extraSpace = this.paddingText;
  }

  alignmentChange(align){
    this.alignmentText = align;
    this.global.setActiveAlignment(align);
    let reader = this.navParams.get('ctrl');
    reader.alignment = align;
  }

  setTheme(theme){
    this.themeText = theme;
    this.global.setTheme(theme);
  }

  decreaseFont(){
    let fontSet = false;

    this.activeFontSize = this.global.getFontSize();
    if(this.activeFontSize > this.fontSizes[this.fontSizes.length - 1]){
      this.global.setFontSize(this.fontSizes[this.fontSizes.length - 1]);
    }
    else{
      for(let i = 0; i < this.fontSizes.length - 1; i++){
        if(this.fontSizes[i] < this.activeFontSize && this.fontSizes[i + 1] > this.activeFontSize){
          this.global.setFontSize(this.fontSizes[i]);
          fontSet = true;
          break;
        }
      }
      if(!fontSet){
        for(let i = 1; i < this.fontSizes.length; i++){
          if(this.fontSizes[i] == this.activeFontSize){
            this.global.setFontSize(this.fontSizes[i - 1]);
            break;
          }
        }
      }
    }
  }

  increaseFont(){
    let fontSet = false;
    
    this.activeFontSize = this.global.getFontSize();
    if(this.activeFontSize > this.fontSizes[this.fontSizes.length - 1]){
      this.global.setFontSize(this.fontSizes[this.fontSizes.length - 1]);
    }
    else{
      for(let i = 0; i < this.fontSizes.length - 1; i++){
        if(this.fontSizes[i] < this.activeFontSize && this.fontSizes[i + 1] > this.activeFontSize){
          this.global.setFontSize(this.fontSizes[i + 1]);
          fontSet = true;
          break;
        }
      }
      if(!fontSet){
        for(let i = 0; i < this.fontSizes.length - 1; i++){
          if(this.fontSizes[i] == this.activeFontSize){
            this.global.setFontSize(this.fontSizes[i + 1]);
            break;
          }
        }
      }
    }
  }
}
