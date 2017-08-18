import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RevisionsModalPage } from '../../pages/revisions-modal/revisions-modal';
import { AuthorModalPage } from '../../pages/author-modal/author-modal';

import { GlobalService } from '../../services/global-service';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  revisionString : string;
  recentNum: Number;

  recentSubscribe: any;
  constructor(public navCtrl: NavController, private navParams: NavParams, private http: Http, private revisionsModal: ModalController, private authorModal: ModalController, private global: GlobalService) {
    this.recentSubscribe = global.historyCountChange.subscribe(value =>{
      console.log(value);
    })
  }

  ionViewDidLoad() {
    this.http.get('../assets/revision.html').map(res => res).subscribe(res => {
      this.revisionString = res["_body"];
    })
    this.recentNum = this.global.getRecentCount();
  }

  showRevisionModal(){
    let revModal = this.revisionsModal.create(RevisionsModalPage, {
      "revisionString": this.revisionString
    });
    revModal.present();
  }

  showAuthorModal(){
    let authModal = this.authorModal.create(AuthorModalPage);
    authModal.present();
  }

  recentChange(){
    this.global.setRecentCount(this.recentNum);
  }
}
