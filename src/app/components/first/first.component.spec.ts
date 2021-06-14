import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FirstComponent} from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  const mockNums = {
    firstNum: -5,
    secondNum: 10,
    firstNumBorder: 'red',
    secondNumBorder: 'blue'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update Input values', () => {
    component.firstNum = mockNums.firstNum;
    component.secondNum = mockNums.secondNum;
    component.firstNumBorder = mockNums.firstNumBorder;
    component.secondNumBorder = mockNums.secondNumBorder;

    fixture.detectChanges();

    const div = fixture.nativeElement.querySelectorAll('div.number');
    expect(div[0].innerText).toEqual('-5');
    expect(div[0].classList[1]).toEqual('red');
    expect(div[1].innerText).toEqual('10');
    expect(div[1].classList[1]).toEqual('blue');
  });

});
