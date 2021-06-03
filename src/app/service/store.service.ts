import { Injectable } from '@angular/core';
import {Nums} from "./types";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private nums: Nums = {
    firstNum: -5,
    secondNum: 10
  }

  private nums$: BehaviorSubject<Nums> = new BehaviorSubject(this.nums);
  currentNums = this.nums$.asObservable();

  public changeNums(): void {
    this.nums$.next(this.change());
  }

  public change(): Nums {
    this.increase();
    this.decrease();
    this.decrease();
    return this.nums;
  }

  public getNumsFromService(): Nums {
    return this.nums;
  }
  private increase() { this.nums.firstNum++ }

  private decrease() { return this.nums.secondNum-- }
}
