import { stateType } from "../Interface/state"

const operation = (total: string | null, next: string | null, operation: string | null): stateType => {
  let state: stateType = {
    total: total,
    next: next,
    operation: operation
  }

  switch (operation) {
    case '×':
      if (state.next) {
        state = {
          total: (Number(state.total) * Number(state.next)).toString(),
          next: null,
          operation: null,
        };
      }
      break;

    case '/':
      if (state.next) {
        state = {
          total: (Number(state.total) / Number(state.next)).toString(),
          next: null,
          operation: null,
        };
      }
      break;

    case '+':
      if (state.next) {
        state = {
          total: (Number(state.total) / Number(state.next)).toString(),
          next: null,
          operation: null,
        };
      }
      break;
    
    case '-':
      if (state.next) {
        state = {
          total: (Number(state.total) - Number(state.next)).toString(),
          next: null,
          operation: null,
        };
      }
      break;
  }

  return state;
}

export default operation;