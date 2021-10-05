import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('openClose', [
      state('open', 
      style({display: 'block',opacity: 1,transform: 'translate(0px,5px)'})),
      state('closed', style({display: 'none',opacity: 0,transform: 'translate(0px,-15px)'})),
      transition('open => closed', 
      animate('0.3s')),
      transition('closed => open', animate('0.3s')),
    ]),
    trigger('rotatedState', [
      state('open', style({ transform: 'rotate(0)' })),
      state('closed', style({ transform: 'rotate(180deg)' })),
      transition('open => closed', animate('0.3s')),
      transition('closed => open', animate('0.3s'))
    ])
  ]
})
export class FilterComponent implements OnInit {

  @Output() outputFromChild = new EventEmitter();
  @Input()regionalCountries!: Subject<boolean>;

  isShowing: boolean = false; 
  rotatedState: boolean = false;
  regions: any[] = ['All','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor() { }
 
  ngOnInit(): void {
  }

  dropDownToggle() {
    this.isShowing = !this.isShowing;
    this.rotatedState = !this.rotatedState;
  }

  selectedRegion(e:any) {
    this.outputFromChild.emit(e.option.value);
  }

}
