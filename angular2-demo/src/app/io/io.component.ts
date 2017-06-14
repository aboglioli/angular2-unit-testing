import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.scss']
})
export class IOComponent implements OnInit {
  @Input() input: string;
  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.output.emit(this.input + '!');
  }

}
