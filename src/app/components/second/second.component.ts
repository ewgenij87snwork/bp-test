import {Component, OnChanges, OnInit} from '@angular/core';
import {StoreService} from "../../service/store.service";
import {Nums} from "../../service/types";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnChanges {
  nums: Nums = null;
  timeToStop = Date.now() + 6000;
  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.initNums();

  }
  ngOnChanges(): void {
    this.initNums();
  }
  startChange(): Boolean {
    let nextTimeIteration = Date.now() + 1000;
    if (this.timeToStop <= Date.now()) {
      return true;
    }
    while(nextTimeIteration !== Date.now()) {}
    this.initNums();
    this.storeService.change();
    console.log(this.nums);
    this.startChange();
  }
  public initNums() {
    this.nums = {
      firstNum: this.storeService.firstNum,
      secondNum: this.storeService.secondNum
    }
  }
}
