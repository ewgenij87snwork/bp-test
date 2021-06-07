import {TestBed} from '@angular/core/testing';

import {StoreService} from './store.service';
import {Nums} from './types';

const mockNums = {
    firstNum: -5,
    secondNum: 10
};

describe('StoreService', () => {
    let service: StoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StoreService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should init nums', () => {
        expect(service.initNums()).toEqual(mockNums);
    });

    it('should change nums', () => {
        service.initNums();
        const mockChangedNums: Nums = {
            firstNum: -4,
            secondNum: 8
        };
        expect(service.change()).toEqual(mockChangedNums);
    });
});
