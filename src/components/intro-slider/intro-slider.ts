import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';

/**
 * Generated class for the IntroSliderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'intro-slider',
  templateUrl: 'intro-slider.html'
})
export class IntroSliderComponent {
  slideList: Array<Object>;
  isIOS: boolean;
  isAndroid: boolean;
  constructor(private platform: Platform, private file: File) {
    var url = platform.is('cordova') ? (this.file.applicationDirectory + 'www/') : '../'
    url += "assets/images/intro/";
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');

    this.slideList = [{
      img: url + "mh-library.png",
      os: "ios|android",
      size: "mobile|iphone|phablet|tablet|ipad",
      description: "Browse hymnals"
    },{
      img: url + "mh-reader-ios.png",
      os: "ios",
      size: "iphone|ipad",
      description: "Read and play the hymn"
    },{
      img: url + "mh-reader-android.png",
      os: "android",
      size: "mobile|phablet|tablet",
      description: "Read and play the hymn"
    },{
      img: url + "mh-reader-settings-ios.png",
      os: "ios",
      size: "iphone|ipad",
      description: "Customize"
    },{
      img: url + "mh-reader-settings-android.png",
      os: "android",
      size: "mobile|phablet|tablet",
      description: "Customize"
    },{
      img: url + "mh-input-ios-ipad.png",
      os: "ios",
      size: "ipad",
      description: "Read, bookmark, and play the hymn"
    },{
      img: url + "mh-input-ios-iphone.png",
      os: "ios",
      size: "iphone",
      description: "Read, bookmark, and play the hymn"
    },{
      img: url + "mh-input-android-phone.png",
      os: "android",
      size: "mobile|phablet|",
      description: "Browse hymns"
    },{
      img: url + "mh-input-android-tablet.png",
      os: "android",
      size: "tablet",
      description: "Browse hymns"
    }]
  }

}
