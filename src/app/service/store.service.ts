import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public firstNum = -5;
  public secondNum = 10;


  public change() {
    this.increase();
    this.decrease();
    this.decrease();
  }

  public increase() { this.firstNum++ }

  private decrease() { return this.secondNum-- }
}
