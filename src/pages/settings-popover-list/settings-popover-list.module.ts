import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPopoverListPage } from './settings-popover-list';

@NgModule({
  declarations: [
    SettingsPopoverListPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPopoverListPage),
  ],
})
export class SettingsPopoverListPageModule {}
