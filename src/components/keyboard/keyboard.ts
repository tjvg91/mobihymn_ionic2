import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { Subject } from "rxjs/Subject";

/**
 * Generated class for the KeyboardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'keyboard',
  templateUrl: 'keyboard.html',
  animations: [
    trigger('slideUp', [
      state('hidden', style({
        bottom: '-12em'
      })),
      state('shown', style({
        bottom: '0em'
      })),
      transition('hidden <=> shown', animate('500ms ease'))
    ])
  ]
})
export class KeyboardComponent implements OnChanges {
  @Output() outputChange = new EventEmitter();

  keyboardSubject: Subject<string> = new Subject<string>();
  keyboardShown: string = "shown";
  @Input()
  set keyboardView(value){
    this.keyboardShown = value;
    this.keyboardSubject.next(value);
  };
  get keyboardView(){
    return this.keyboardShown;
  }

  key: string = "";
  tune: string = "";
  
  
  constructor() {
    this.keyboardSubject.subscribe(() => {
      console.log('sulud');
    })
  }

  public hideKeyboard() : void{
    this.keyboardShown = "hidden";
  }

  public showKeyboard() : void{
    this.keyboardShown = "shown";
  }

  public isHidden() : boolean{
    return this.keyboardShown == "hidden";
  }

  public isShown() : boolean{
    return this.keyboardShown == "shown";
  }
  
  keyChange(key){
    let go = false;
    if(!parseInt(key)){
      if(/f|s|t/.test(key))
        this.tune = key;
      else if(key == 'b'){
        if(this.key.length == 1)
          this.key = "1"
        else
          this.key = this.key.slice(this.key.length - 2, this.key.length - 1);
      }
      else if(key == 'e'){
        go = true;
      }
    }
    else
      this.key += key;

    this.outputChange.emit({
      outs: this.key,
      tune: this.tune,
      go: go
    });
  }

  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
  }
}
