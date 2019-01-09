import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lec-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  public decrease():void {
    this.value--;
    this.valueChange.emit(this.value);
  }

}
