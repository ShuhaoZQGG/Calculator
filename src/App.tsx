import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import ButtonPanel from './Components/ButtonPanel';
import { stateType } from './Interface/state';
import calculate from './Methods/calculate';
function App() {
  const [state, setState] = useState<stateType>(
    {
      total: null,
      next: null,
      operation: null,
    }
  )


  const handleClick = (buttonName: string) => {
    const calculation = calculate(state, buttonName);

    setState({...calculation});
    console.log(state);
  }
  return (
    <div className="App">
      <Display value={state.next || state.total || '0'}/>
      <ButtonPanel clickHandler={handleClick}/>
    </div>
  );
}

export default App;
