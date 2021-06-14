import {NumsState} from './reducer';
import * as fromSelector from './selectors';

describe('Selectors', () => {
  it('should work Selectors', () => {
    const initialState: NumsState = {
      firstNum: -5,
      secondNum: 10,
      firstNumBorder: 'red',
      secondNumBorder: 'blue'
    };

    const firstNum = fromSelector.firstNumSelector.projector(initialState);
    expect(firstNum).toEqual(-5)

    const secondNum = fromSelector.secondNumSelector.projector(initialState);
    expect(secondNum).toEqual(10)

    const firstNumBorder = fromSelector.firstNumBorderSelector.projector(initialState);
    expect(firstNumBorder).toEqual('red')

    const secondNumBorder = fromSelector.secondNumBorderSelector.projector(initialState);
    expect(secondNumBorder).toEqual('blue')
  });
});
