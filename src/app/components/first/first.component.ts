import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Nums} from "../../service/types";
import {StoreService} from "../../service/store.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() nums: Nums = null;

  constructor(private storeService: StoreService) {
  }

  public borderStyle(num) {
   if(num > 0) {
     return 'blue'
   } else if (num < 0) {
     return 'red'
   }
  }

  ngOnInit(): void {
    this.storeService.currentNums.subscribe(nums => this.nums = nums)
  }

  ngOnChanges(): void {
    this.storeService.currentNums.subscribe(nums => this.nums = nums)
  }

  ngAfterViewInit(): void {
    this.storeService.currentNums.subscribe(nums => this.nums = nums)
  }
}
