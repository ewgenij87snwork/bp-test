import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../service/store.service";
import {Nums} from "../../service/types";
import {interval} from "rxjs";
import {switchMap, takeWhile} from "rxjs/internal/operators";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  nums: Nums = null;
  stop = false;

  constructor(private storeService: StoreService) {
  }

  interval = interval(1000);

  ngOnInit() {
    this.nums = this.storeService.initNums();
  }

  onStart() {
    this.stop = false;
    this.interval
      .pipe(
        takeWhile(() => !this.stop),
        switchMap(async () => this.storeService.change()))
      .subscribe(nums => this.nums = nums)
  }

  onReset() {
    this.nums = this.storeService.initNums();
  }
}
