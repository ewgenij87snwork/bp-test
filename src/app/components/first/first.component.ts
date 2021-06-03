import {Component, Input} from '@angular/core';
import {Nums} from "../../service/types";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Input() nums: Nums = null;

  public borderStyle(num) {
   if(num > 0) {
     return 'blue'
   } else if (num < 0) {
     return 'red'
   }
  }
}
