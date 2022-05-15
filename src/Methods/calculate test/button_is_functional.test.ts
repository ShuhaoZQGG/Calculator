import calculate from '../calculate';
import { stateType } from '../../Interface/state';

test('if button is =, total, next, and operation are all not null', () => {
  const buttonName = '=';

  const stateX: stateType = {
    total: '9',
    next: '6',
    operation: '×',
  }

  const expectedStateX: stateType = {
    total: '54',
    next: null,
    operation: null,
  }

  expect(calculate(stateX,buttonName)).toMatchObject(expectedStateX);

  const statePlus: stateType = {
    total: '9',
    next: '6',
    operation: '+',
  }

  const expectedStatePlus: stateType = {
    total: '15',
    next: null,
    operation: null,
  }

  expect(calculate(statePlus,buttonName)).toMatchObject(expectedStatePlus);

  const stateMinus: stateType = {
    total: '9',
    next: '6',
    operation: '-',
  }

  const expectedStateMinus: stateType = {
    total: '3',
    next: null,
    operation: null,
  }

  expect(calculate(stateMinus,buttonName)).toMatchObject(expectedStateMinus);

  const stateDivision: stateType = {
    total: '9',
    next: '6',
    operation: '/',
  }

  const expectedStateDivision: stateType = {
    total: (9/6).toString(),
    next: null,
    operation: null,
  }

  expect(calculate(stateDivision,buttonName)).toMatchObject(expectedStateDivision);
})

test('if button is =, next is null, state should not change', () => {
  const state: stateType = {
    total: '9',
    next: null,
    operation: '+',
  }

  const buttonName = '=';

  expect(calculate(state,buttonName)).toMatchObject(state);
})

test('if button is %, next is not null, total and operation are null, next will be divided by 100', () => {
  const buttonName = '%';
  const state: stateType = {
    total: null,
    next: '10',
    operation: null,
  };
  const expectedState: stateType = {
    total: null,
    next: '0.1',
    operation: null,
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('if button is %, the state is not null, it will perform the operation first and then divide total by 100', () => {
  const buttonName = '%';
  const state: stateType = {
    total: '5',
    next: '3',
    operation: '×',
  };
  const expectedState: stateType = {
    total: '0.15',
    next: null,
    operation: null,
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('if button is AC, state will become 0', () => {
  const buttonName = 'AC';
  const state: stateType = {
    total: '5',
    next: '3',
    operation: '×',
  };
  const expectedState: stateType = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})


test('if button is ., if next is an integer, a . will be added to next', () => {
  const buttonName = '.';
  const state: stateType = {
    total: '5',
    next: '3',
    operation: '+',
  };
  const expectedState: stateType = {
    total: '5',
    next: '3.',
    operation: '+',
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('if button is ., if next is not an integer, nothing will change', () => {
  const buttonName = '.';
  const state: stateType = {
    total: '5',
    next: '3.01',
    operation: '+',
  };
  const expectedState: stateType = {
    total: '5',
    next: '3.01',
    operation: '+',
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('if button is ., if next is null, next will become 0 and total becomes null.', () => {
  const buttonName = '.';
  const state: stateType = {
    total: '5',
    next: null,
    operation: null,
  };
  const expectedState: stateType = {
    total: null,
    next: '0.',
    operation: null,
  };

  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('if button is +/-, if next is not null, next will change its sign', () => {
  const buttonName = '+/-';
  const statePos: stateType = {
    total: null,
    next: '3',
    operation: null,
  };

  const stateNeg: stateType = {
    total: null,
    next: '-7',
    operation: null
  }
  const expectedStatePos: stateType = {
    total: null,
    next: '-3',
    operation: null,
  };

  const expectedStateNeg: stateType = {
    total: null,
    next: '7',
    operation: null,
  };


  expect(calculate(statePos, buttonName)).toMatchObject(expectedStatePos);
  expect(calculate(stateNeg, buttonName)).toMatchObject(expectedStateNeg);

})


test('if button is +/-, if next is null and total is not null, total will change its sign', () => {
  const buttonName = '+/-';
  const statePos: stateType = {
    total: '3',
    next: null,
    operation: null,
  };

  const stateNeg: stateType = {
    total: '7',
    next: null,
    operation: null
  }
  const expectedStatePos: stateType = {
    total: '-3',
    next: null,
    operation: null,
  };

  const expectedStateNeg: stateType = {
    total: '-7',
    next: null,
    operation: null,
  };


  expect(calculate(statePos, buttonName)).toMatchObject(expectedStatePos);
  expect(calculate(stateNeg, buttonName)).toMatchObject(expectedStateNeg);

})


test('if button is +/-, all of the state is not null, next will change its sing', () => {
  const buttonName = '+/-';
  const state: stateType = {
    total: '3',
    next: '7',
    operation: '+',
  };

  const expectedState: stateType = {
    total: '3',
    next: '-7',
    operation: '+',
  };


  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})