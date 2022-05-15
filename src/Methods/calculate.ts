import { stateType } from "../Interface/state"
import isNumber from "./isNumber";
import isOperation from './isOperation';
import operate from './operate';
const calculate = (state: stateType, buttonName: string): stateType => {
  if (isNumber(buttonName)) {
    if (state.total && !state.operation) {
      state = {
        ...state,
        total: null,
        next: buttonName,
      }
    }
    if (state.next === '0') {
      state.next = buttonName;
    } else if (state.next) {
      state.next += buttonName;
    } else {
      state.next = buttonName;
    }

    return state;
  };

  if (isOperation(buttonName)) {
    if (state.next) {
      state = {
        total: state.next,
        next: null,
        operation: buttonName,
      };
    }

    if (state.operation && state.next && state.operation) {
      const result = Number(operate(state.total, state.next, state.operation)).toString();
      state = {
        total: result,
        next: null,
        operation: buttonName,
      };
    }

    return state;
  };

  switch (buttonName) {
    case 'AC':
      state = {
        total: null,
        next: null,
        operation: null,
      };

      break;

    case '+/-':
      if (state.next) {
        state = {
          ...state,
          next: '-' + state.next,
        }
      } else if (state.total) {
        state = {
          ...state,
          total: '-' + state.total,
        }
      }

      break;
    
    case '%':
      if (state.operation && state.next) {
        const result = (Number(operate(state.total, state.next, state.operation).total) / 100).toString();

        state = {
          total: result,
          next: null,
          operation: null,
        }
      }

      if (state.next) {
        const result = (Number(state.next)/100).toString();
        state = {
          ...state,
          next: result,
        }
      }
      break;
    
    case '.':
      if (state.next) {
        if (state.next.includes(buttonName)) {
          state = {
            ...state,
            next: state.next += '.',
          }
        }
      }

      break;

    case '=':
      if (state.next && state.total && state.operation) {
        const result = Number(operate(state.total, state.next, state.operation).total).toString();
        state = {
          total: result,
          next: null,
          operation: null,
        }
      }
      break;
  }

  return state;
}

export default calculate;