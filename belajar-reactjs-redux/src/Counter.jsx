import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementx2, getDoubleCounter, getCounter } from "./counterSlice.js";

export default function Counter() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }
    function handleIncrementx2() {
        dispatch(incrementx2())
    }

    const doubleCounter = useSelector(getDoubleCounter)
    const tripleCounter = useSelector ((state) => getCounter(state, 100))

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Double Counter: {doubleCounter}</h1>
            <h1>Triple Counter: {tripleCounter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => dispatch(increment(2))}>Increment +2</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => dispatch(decrement(2))}>Decrement -2</button>
            <button onClick={handleIncrementx2}>Increment x2</button>
            <button onClick={() => dispatch(incrementx2(3))}>Increment +3</button>
        </div>
    )
}

