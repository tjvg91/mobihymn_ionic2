import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunePopoverPage } from './tune-popover';

@NgModule({
  declarations: [
    TunePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TunePopoverPage),
  ],
})
export class TunePopoverPageModule {}
