import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  __eachCountry: any = [];
   @Input()
  get eachCountry(): any { return this.__eachCountry; }
  set eachCountry(value: any[]) {
    this.__eachCountry = value;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
