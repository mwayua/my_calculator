import React, {useState} from "react";
import "./calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    
  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function percentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  function show() {

  }
    return(
    <div className="content">
        <Box m={5} />
        <Container maxWidth="xs">
          <div className="wrapper">
            <Box m={12} />
            <h1 className="result">{num}</h1>
            {/* <h2 className="text-gray-700">{number}</h2> */}
             <h2></h2>
                <button className="clear AC" onClick={clear}>AC</button>
                <button className="clear" onClick={changeSign}>+/-</button>
                <button className="clear" onClick={percentage}>%</button>
                <button className="gray" onClick={operatorHandler} value="/">/</button>
                <button className="clear" value={7} onClick={inputNum}>7</button>
                <button className="clear" value={8} onClick={inputNum}>8</button>
                <button className="clear"value={9} onClick={inputNum}>9</button>
                <button className="gray" value="X" onClick={operatorHandler}>*</button>
                <button className="clear" value={4} onClick={inputNum}>4</button>
                <button className="clear" value={5} onClick={inputNum}>5</button>
                <button className="clear" value={6} onClick={inputNum}>6</button>
                <button className="gray" value="-" onClik={operatorHandler}>-</button>
                <button className="clear" value={1} onClick={inputNum}>1</button>
                <button className="clear" value={2} onClick={inputNum}>2</button>
                <button className="clear" value={3} onClick={inputNum}>3</button>
                <button className="gray" value="+" onClick={operatorHandler}>+</button>
                <button className="clear" value={0} onClick={inputNum}>0</button>
                <button className="clear" onClick={inputNum} value={"."}>.</button>
                <button className="clear" style={{ visibility: "hidden" }}></button>
                <button className="pink equal" onClick={calculate}>=</button> 
           </div>
        </Container>
    </div>
    ); 
}