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

  constructor(private viewCtrl: ViewController, private navParams: NavParams, private global : GlobalService) {
  }

  ionViewDidLoad() {
    this.paddingText = this.global.getPadding();
    this.alignmentText = this.global.getActiveAlignment();
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
}
