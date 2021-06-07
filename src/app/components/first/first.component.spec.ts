import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstComponent} from './first.component';
import {Nums} from '../../service/types';

describe('FirstComponent', () => {
    let component: FirstComponent;
    let fixture: ComponentFixture<FirstComponent>;

    const mockNums: Nums = {
        firstNum: 1,
        secondNum: 2
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;
        component.nums = mockNums;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display Nums', () => {
        component.nums = {
            firstNum: 2,
            secondNum: 1
        };
        fixture.detectChanges();
        const div = fixture.nativeElement.querySelectorAll('div.number');
        expect(div[0].innerText).toEqual('2');
    });

    it('should return Border-Color -- Blue', () => {
        expect(component.borderStyle(10)).toEqual('blue');
    });

    it('should return Border-Color -- Red', () => {
        expect(component.borderStyle(-10)).toEqual('red');
    });
});
