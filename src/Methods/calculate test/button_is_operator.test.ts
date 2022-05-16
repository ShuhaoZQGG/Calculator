import calculate from '../calculate';
import { stateType } from '../../Interface/state';

test('If the total is null, next is not null, and button is any operator: if operator == ×, total is updated as the next, next is updated to null, operator is updated to ×', () => {
    const state: stateType = {
      total: null,
      next: '6',
      operation: null,
    }

    const buttonName = '×';

    const expectedState: stateType = {
      total: '6',
      next: null,
      operation: '×',
    }

    expect(calculate(state,buttonName)).toMatchObject(expectedState);
})


test('If all states are not null: if operator == +, total is updated as next + total, next is updated to null, operator is updated to the new operator', () => {
  const state: stateType = {
    total: '23',
    next: '7',
    operation: '+',
  }

  const buttonName = '/';

  const expectedState: stateType = {
    total: '30',
    next: null,
    operation: '/',
  }

  expect(calculate(state,buttonName)).toMatchObject(expectedState);
})

test('If all states are not null: if operator == /, total is updated as next / total, next is updated to null, operator is updated to the new operator', () => {
  const state: stateType = {
    total: '23',
    next: '7',
    operation: '/',
  }

  const buttonName = '/';

  const expectedState: stateType = {
    total: (23/7).toString(),
    next: null,
    operation: '/',
  }

  expect(calculate(state,buttonName)).toMatchObject(expectedState);
})

test('If the total is not null, next is null, and button is any operator: if operator == ×, total is updated as the next, next is updated to null, operator is updated to ×', () => {
  const state: stateType = {
    total: '6',
    next: null,
    operation: null,
  }

  const buttonName = '×';

  const expectedState: stateType = {
    total: '6',
    next: null,
    operation: '×',
  }

  expect(calculate(state,buttonName)).toMatchObject(expectedState);
})