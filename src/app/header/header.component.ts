import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('toggle', [
      state('show', 
      style({opacity: 1,display: 'block'})),
      state('hide', style({opacity: 0,display: 'none'})),
      transition('show => hide', 
      animate('0.3s')),
      transition('hide => show', animate('0.3s'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isDarkMode: boolean = false;

  ngOnInit(): void {
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('darkMode');
    // console.log(this.isDarkMode);
  }
}
