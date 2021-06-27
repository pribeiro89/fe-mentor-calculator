import { useState, useEffect } from 'react';
import './App.css';
import Key from './components/key';
import Toggle from './components/toggle';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [displayValue, setDisplayValue] = useState(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [currentOperator, setCurrentOperator] = useState(null)
  const [numberQueue, setNumberQueue] = useState([])

  useEffect(() => {
    if (currentValue !== 0) {
      setDisplayValue(currentValue);
    }
  }, [currentValue])


  const getTheme = () => {
    if (selectedTheme === 1) {
      return 'theme-light';
    }
    if (selectedTheme === 2) {
      return 'theme-contrast';
    }

    return 'theme-dark';
  }

  const addNumber = (event) => {
    const keyValue = event.target.dataset.value
    console.log({ keyValue, currentValue, displayValue });

    if (currentValue === 0) {
      setCurrentValue(keyValue)
    } else {
      setCurrentValue(currentValue + keyValue)
    }
  }

  const addDecimal = (event) => {
    const keyValue = event.target.dataset.value

    setCurrentValue(currentValue + keyValue)
  }

  const clear = () => {
    setCurrentValue(0)
  }

  const reset = () => {
    setCurrentValue(0)
    setNumberQueue([])
    setCurrentOperator(null)
  }

  const add = () => {
    console.log('add', currentValue);
    setCurrentOperator('+')
    setNumberQueue([...numberQueue, currentValue])
    setCurrentValue(0);
  }
  const subtract = () => {
    console.log('subtract', currentValue);
    setCurrentOperator('-')
    setNumberQueue([...numberQueue, currentValue])
    setCurrentValue(0);
  }
  const multiply = () => {
    console.log('multiply', currentValue);
    setCurrentOperator('x')
    setNumberQueue([...numberQueue, currentValue])
    setCurrentValue(0);
  }
  const divide = () => {
    console.log('divide', currentValue);
    setCurrentOperator('/')
    setNumberQueue([...numberQueue, currentValue])
    setCurrentValue(0);
  }

  const calculate = () => {
    if (!currentOperator) {
      return;
    }

    console.log(numberQueue);
    const firstNumber = numberQueue[0];
    const secondNumber = numberQueue[1] || currentValue;

    let result = 0;
    if (currentOperator === '+') {
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (currentOperator === '-') {
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (currentOperator === 'x') {
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (currentOperator === '/') {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    setCurrentOperator(null)
    setCurrentValue(result)
  }

  return (
    <div className={`${getTheme()} bg-main flex justify-center`}>
      <div className="w-screen lg:max-w-lg p-8">
        <header className="flex justify-between items-end mb-8">
          <h1 className="text-3.5xl">calc</h1>
          <div className="flex items-end text-sm">
            <span className="mr-5">THEME</span>
            <Toggle selectedTheme={selectedTheme} selectTheme={setSelectedTheme} />
          </div>
        </header>
        <section className="screen bg-screen rounded-lg text-text text-3.5xl p-8 mb-6 text-right">
          {displayValue}
        </section>
        <section className="keypad bg-keypad rounded-lg grid grid-cols-4 grid-rows-5 gap-4 p-6">
          <Key value="7" onClick={addNumber} />
          <Key value="8" onClick={addNumber} />
          <Key value="9" onClick={addNumber} />
          <Key value="DEL" type="function" onClick={clear} />

          <Key value="4" onClick={addNumber} />
          <Key value="5" onClick={addNumber} />
          <Key value="6" onClick={addNumber} />
          <Key value="+" onClick={add} />

          <Key value="1" onClick={addNumber} />
          <Key value="2" onClick={addNumber} />
          <Key value="3" onClick={addNumber} />
          <Key value="-" onClick={subtract} />

          <Key value="." onClick={addDecimal} />
          <Key value="0" onClick={addNumber} />
          <Key value="/" onClick={divide} />
          <Key value="x" onClick={multiply} />

          <Key value="RESET" type="function" onClick={reset} className="col-span-2" />
          <Key value="=" type="result" onClick={calculate} className="col-span-2" />
        </section>

      </div>
    </div>
  );
}

export default App;
