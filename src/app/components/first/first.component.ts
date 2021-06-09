import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: [ './first.component.scss' ]
})
export class FirstComponent {
  @Input() firstNum: number;
  @Input() firstNumBorder = 'none';
  @Input() secondNum: number;
  @Input() secondNumBorder = 'none';
}
