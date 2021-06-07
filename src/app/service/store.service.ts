import {Injectable} from '@angular/core';
import {Nums} from './types';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private nums: Nums = this.initNums();

    public initNums(): Nums {
        return this.nums = {
            firstNum: -5,
            secondNum: 10
        };
    }

    public change(): Nums {
        this.increase();
        this.decrease();
        this.decrease();
        return this.nums;
    }

    private increase(): void {
        this.nums.firstNum++;
    }

    private decrease(): void {
        this.nums.secondNum--;
    }
}
