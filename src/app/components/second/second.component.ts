import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../service/store.service";
import {Nums} from "../../service/types";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  nums: Nums = null;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.nums = {
      firstNum: this.storeService.firstNum,
      secondNum: this.storeService.secondNum
    }
  }

}
