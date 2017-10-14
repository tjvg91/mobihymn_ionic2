import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { KeyboardComponent } from './keyboard/keyboard';
import { IntroSliderComponent } from './intro-slider/intro-slider';
@NgModule({
	declarations: [KeyboardComponent,
    IntroSliderComponent],
	imports: [CommonModule],
	exports: [KeyboardComponent,
    IntroSliderComponent]
})
export class ComponentsModule {}
