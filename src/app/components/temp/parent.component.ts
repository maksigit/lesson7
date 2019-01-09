import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lec-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public value:number = 50;
  public increase():void {
    this.value++
  }

}
