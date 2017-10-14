import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello IntroSliderComponent Component');
    this.text = 'Hello World';
  }

}
