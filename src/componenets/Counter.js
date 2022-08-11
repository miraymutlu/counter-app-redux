import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../redux/counter/counterSlice";

function Counter() {
  const [incrementAmount, setincrementAmount] = useState(0);
  const [decrementAmount, setdecrementAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <input type="number" value={incrementAmount} onChange={(e) => setincrementAmount(e.target.value)}/>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment by amount</button>
      <br />
      <br />
      <input type="number" value={decrementAmount} onChange={(e) => setdecrementAmount(e.target.value)}/>
      <button onClick={() => dispatch(decrementByAmount(decrementAmount))}>Decrement by amount</button>
    </div>
  );
}

export default Counter;
