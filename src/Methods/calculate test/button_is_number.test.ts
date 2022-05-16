import calculate from '../calculate';
import { stateType } from '../../Interface/state';
test('If the button is a number: state next is null, state next should be changed to the number', ()=> {
  const state: stateType = {
    total: null,
    next: null,
    operation: null,
  }

  const buttonName = '2'

  const expectedState: stateType = {
    total: null,
    next: '2',
    operation: null,
  }
  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})


test('If the button is a number: state next should keep appending string to the current state next if state next != 0', ()=> {
  const state: stateType = {
    total: null,
    next: '1',
    operation: null,
  }

  const buttonName = '2'

  const expectedState: stateType = {
    total: null,
    next: '12',
    operation: null,
  }
  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})

test('If the button is a number: state next should replace itself by the buttonName if state next == null | 0', ()=> {
  const state0: stateType = {
    total: '1',
    next: '0',
    operation: '/',
  }

  const stateNull: stateType = {
    total: null,
    next: null,
    operation: '+'
  }
  const buttonName = '2'

  const expectedState0: stateType = {
    total: '1',
    next: '2',
    operation: '/',
  }

  const expectedStateNull: stateType = {
    total: null,
    next: '2',
    operation: '+',
  }
  expect(calculate(state0, buttonName)).toMatchObject(expectedState0);
  expect(calculate(stateNull, buttonName)).toMatchObject(expectedStateNull);
})

test('If the button is a number: stateTotal should become null if operation is null', ()=> {
  const state: stateType = {
    total: '10',
    next: null,
    operation: null,
  }

  const buttonName = '2'

  const expectedState: stateType = {
    total: null,
    next: '2',
    operation: null,
  }
  expect(calculate(state, buttonName)).toMatchObject(expectedState);
})