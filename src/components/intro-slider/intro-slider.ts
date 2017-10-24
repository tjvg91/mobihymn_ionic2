import { Component, ViewChild } from '@angular/core';
import { Slides, Platform } from 'ionic-angular';
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

  @ViewChild(Slides) slides: Slides;

  constructor(private platform: Platform, private file: File) {
    //if(window.localStorage.getItem('introSlider')){}
    platform.ready().then(() => {
      var url = platform.is('cordova') ? (file.applicationDirectory + 'www/') : '../';
      
      this.slideList = [{
        icon: [url + "assets/images/logo/Icon-72@2x.png"],
        iconType: "img",
        title: "Welcome to MobiHymn"
      },{
        icon: ["book"],
        iconType: "ion",
        title: "Browse hymnals",
        description: "Browse through all the hymnals you desire to read"
      },{
        icon: ["glasses"],
        iconType: "ion",
        title: "Read a hymn",
        description: "MobiHymn lets you read a hymn's lyrics in a chosen hymnal"
      },{
        icon: ["play", "pause"],
        iconType: "ion",
        title: "Play a hymn",
        description: "MobiHymn lets you also play the hymn"
      },{
        icon: ["font"],
        iconType: "fa",
        title: "Customize",
        description: "Customize reading page to your satisfaction"
      },{
        icon: ["checkmark-circle-outline"],
        iconType: "ion",
        title: "Start reading"
      }];
    })
  }

  exitSlides(){
    this.slides._elementRef.nativeElement.parentElement.style.display = "none";
    //window.localStorage.setItem('introSlider', 'done');
  }

}
