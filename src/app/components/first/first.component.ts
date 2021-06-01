import {Component, Input, OnInit} from '@angular/core';
import {Nums} from "../../service/types";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() nums: Nums = null;

  constructor() {
  }

  public borderStyle(num) {
   if(num > 0) {
     return 'blue'
   } else if (num < 0) {
     return 'red'
   }
  }

  ngOnInit(): void {
  }

}
