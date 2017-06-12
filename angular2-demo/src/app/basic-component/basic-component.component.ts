import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  template: '<h1>{{title}}</h1>',
})
export class BasicComponentComponent implements OnInit {
  title = 'Componente básico'

  constructor() { }

  ngOnInit() {
  }

}
