import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private firstNum = -5;
  private secondNum = 10;

  public change() {
    StoreService.increase(this.firstNum);
    StoreService.decrease(this.secondNum);
    StoreService.decrease(this.secondNum);
  }

  private static increase(num) {
   return ++num
  }

  private static decrease(num) {
    return num
  }
}
