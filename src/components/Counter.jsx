import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../app/feature/counter/createSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <div>Counter:{count}</div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={() =>dispatch(decrement())}>-</button>
        </div>


    )
}
export default Counter