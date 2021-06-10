import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Input() firstNum = 0;
  @Input() firstNumBorder = 'none';
  @Input() secondNum = 0;
  @Input() secondNumBorder = 'none';
}
