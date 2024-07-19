import styles from './App.module.css';
import Display from './components/Display.jsx';
import ButtonsContainer from './components/ButtonsContainer.jsx';
import { useState } from 'react';
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    // console.log("button clicked : ", event);
    if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }else if(buttonText === "C"){
      setCalVal("");
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className="container flex flex-col justify-center items-center min-h-screen min-w-full bg-slate-500 text-white">
      <div className="bg-black border-2 border-rose-600 rounded-xl h-3/4 w-80 p-3  max-w-full max-h-svh">
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  )
}
export default App;