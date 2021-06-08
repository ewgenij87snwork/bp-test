import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnChanges {
    @Input() firstNum: number;
    @Input() secondNum: number;
    firstNumBorder = 'none';
    secondNumBorder = 'none';

    ngOnChanges(): void {
        this.firstNumBorder = this.borderStyle(this.firstNum);
        this.secondNumBorder = this.borderStyle(this.secondNum);
    }

    borderStyle(num): string {
        if (num > 0) {
            return 'blue';
        } else if (num < 0) {
            return 'red';
        }
    }
}
