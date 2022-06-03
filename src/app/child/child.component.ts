import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() Name: any;
  @Output() getResponse = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onClick() {
    this.getResponse.emit('Message from child');
  }
}
