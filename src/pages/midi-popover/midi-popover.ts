import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as MidiPlayer from 'midi-player-js';
import * as SoundFont from 'soundfont-player';

/**
 * Generated class for the MidiPopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-midi-popover',
  templateUrl: 'midi-popover.html',
})
export class MidiPopoverPage {
  params: any;
  reader: any;
  player: MidiPlayer.Player;
  minTempo: any;
  maxTempo: any;
  valTempo: any;

  curInstru: any = "acoustic_grand_piano-mp3";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams;
    this.reader = this.params.get('reader');
  }

  ionViewDidLoad() {
    this.player = this.reader.mdiPlayer;
    console.log(this.player);
    this.valTempo = this.player['tempo'];
    this.minTempo = 60;
    this.maxTempo = 120;
  }

  tempoChange(){
    var isPlaying = this.player.isPlaying();
    this.player.pause();
    this.player['tempo'] = this.valTempo;
    if(isPlaying)
      this.player.play();
  }
}
