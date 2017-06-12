import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent implements OnInit {
  items: any[];

  constructor() { }

  ngOnInit() {
    this.items = ['Item 1', 'Item 2', 'Item 3'];
  }

}
