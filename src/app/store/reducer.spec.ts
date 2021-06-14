import {decrease, increase, reset} from './actions';
import * as fromReducer from './reducer';

const { initialState } = fromReducer;


describe('Nums Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {

      const action = { type: 'Unknown'};

      const result = fromReducer.numsReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('Increment FirstNum', () => {
    it('should increment FirstNum', () => {
      const expectedState = {...initialState, firstNum: initialState.firstNum + 1};
      const action = increase();
      const state = fromReducer.numsReducer(initialState, action);

      expect(state).toEqual(expectedState);
      expect(state.firstNumBorder).toEqual('red')
    })
  })

  describe('Decrement SecondNum', () => {
    it('should Decrement SecondNum', () => {
      const expectedState = {...initialState, secondNum: initialState.secondNum - 1};
      const action = decrease();
      const state = fromReducer.numsReducer(initialState, action);

      expect(state).toEqual(expectedState);
      expect(state.secondNumBorder).toEqual('blue')
    })
  })

  describe('Reset State', () => {
    it('should Reset State to default state', () => {
      const action = reset();
      const state = fromReducer.numsReducer(initialState, action);

      expect(state).toEqual(initialState);
    })
  })
});
