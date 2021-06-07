import {Injectable} from '@angular/core';
import {Nums} from './types';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private nums: Nums = this.initNums();

    private static borderStyle(num): string {
        if (num > 0) {
            return 'blue';
        } else if (num < 0) {
            return 'red';
        }
    }

    public initNums(): Nums {
        return this.nums = {
            firstNum: -5,
            firstNumBorder: StoreService.borderStyle(this.nums?.firstNum) || 'none',
            secondNum: 10,
            secondNumBorder: StoreService.borderStyle(this.nums?.secondNum) || 'none'
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
