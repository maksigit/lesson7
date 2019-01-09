import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public value = 2;

  constructor() {  }

  public addCount () {
    this.value ++;
  }

  ngOnInit() {
  }

}
