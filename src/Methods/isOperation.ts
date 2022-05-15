const isOperation = (buttonName: string): boolean => {
  let res;
  switch (buttonName) {
    case '×':
      res = true;
      break;
    case '/':
      res = true;
      break;
    case '+':
      res = true;
      break;
    case '-':
      res = true;
      break;
    default:
      res = false;
  }
  return res;
}

export default isOperation;