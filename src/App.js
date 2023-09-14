import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, resetValue } from "./slice";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  //   console.log(counter);// 10
  const dispatch = useDispatch();
  //   console.log("dispatch", dispatch); 
  //   const [counter, setCounter] = useState(0);
  // const Increment = ()=>{
  // setCounter((preValue)=>preValue + 1);
  // }

  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>Counter {counter}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>
        Increment Amount by 50
      </button>
      <button onClick={() => dispatch(resetValue())}>Reset</button>
    </div>
  );
};

export default App;
