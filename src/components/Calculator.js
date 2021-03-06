import React, { useState, useEffect } from 'react';
import Button from './Button.js';
import ClearButton from './ClearButton.js';
import EqualsButton from './EqualsButton.js';

function Calculator(props){
  const [input, setInput] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [curNum, setCurNum] = useState('');
  const [operator, setOperator] = useState('');

  const clickButton = (e) => {
    if(e === '+' || e === '-' || e === '*2' || e === '^') {
      setOperator(e);
    } else {
      setInput(input + e);
    }
  }

  const handleClear = () => {
    setInput('');
    setPrevNum('');
    setCurNum('');
    setOperator('');
  }

  const addZero = (e) => {
    if(input !== ''){
      setInput(input + e);
    }
  }

  const addDecimal = (e) =>{
    if(input.indexOf('.') === -1) {
      setInput(input + e);
    }
  }

  const solve = () => {
    setCurNum(input);
  }

  useEffect(() => {
    const do_math = {
        '+': function(x,y){return x + y},
        '-': function(x,y){return x - y},
        '*2':function(x){return x * 2},
        '^':function(x,y){return Math.pow(x,y)}
    };

    if(curNum !== ''){
       if(operator !== ''){
       let solution = do_math[operator](parseFloat(prevNum),parseFloat(curNum));
       setInput(solution);
       setOperator('');
       setCurNum('');}
    }
    }, [curNum,operator, prevNum])
    function operation_Func(e) {
      setPrevNum(input);
      setInput('');
      setOperator(e);
    }

    return(
      <>
        <main className="main container">
          <div className="card calc-body">
            <div className="card-body">
              <h2 className="card-title logo">Autumn's Calculator</h2>
            <div className="screen mx-auto">
                <div className="screen__inner">
                  <input type="text" readOnly className="output" value={input} placeholder="0"/>
                </div>
              </div>

            </div>
            <div className="card-body buttons-grid">
                <div className="row">
                  <Button handleClick={clickButton}></Button>
                  <Button handleClick={clickButton}>7</Button>
                  <Button handleClick={clickButton}>8</Button>
                  <Button handleClick={clickButton}>9</Button>
                  <Button handleClick={operation_Func}>^</Button>
                </div>
                <div className="row">
                  <Button handleClick={clickButton}></Button>
                  <Button handleClick={clickButton}>4</Button>
                  <Button handleClick={clickButton}>5</Button>
                  <Button handleClick={clickButton}>6</Button>
                  <Button handleClick={operation_Func}>*2</Button>
                </div>
                <div className="row">
                   <Button handleClick={clickButton}>%</Button>
                   <Button handleClick={clickButton}>3</Button>
                   <Button handleClick={clickButton}>2</Button>
                   <Button handleClick={clickButton}>1</Button>
                   <Button handleClick={operation_Func}>-</Button>
                </div>
                <div className="row">
                  <ClearButton handleClear={handleClear}>CE</ClearButton>
                  <Button handleClick={addZero}>0</Button>
                  <Button handleClick={addDecimal}>.</Button>
                  <EqualsButton handleSolve={solve}>=</EqualsButton>
                  <Button handleClick={operation_Func}>+</Button>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}


export default Calculator;
