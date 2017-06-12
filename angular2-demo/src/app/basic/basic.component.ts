import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: '<h1>{{title}}</h1>',
})
export class BasicComponent implements OnInit {
  title = 'Componente básico'

  constructor() { }

  ngOnInit() {
  }

}
