import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../service/store.service";
import {Nums} from "../../service/types";
import {Observable} from "rxjs";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit{
  nums: Nums = null;
  timeToStop = Date.now() + 6000;
  stop = false;
  bla: Observable<Nums>;
  constructor(private storeService: StoreService) {
  }

ngOnInit() {
    this.nums = this.storeService.getNumsFromService()
}
  onStartChange() {
    let endTimeInterval = Date.now() + 1000;
    if (this.timeToStop <= Date.now()) {
      return true;
    }
    while(endTimeInterval !== Date.now()) {}
    this.storeService.changeNums();
    this.bla = this.storeService.currentNums;
    this.storeService.currentNums.subscribe(nums => this.nums = nums);
    console.log(this.nums)
    this.onStartChange();
  }

  public getNums() {
    this.storeService.getNumsFromService();
  }

}
