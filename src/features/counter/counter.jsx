import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./counterSlice";
function Counter(){
    var {count} =useSelector(state=>state.count)
    console.log(count)

    const dispatch=useDispatch()

    
    return(
        <div>
            <h1>counter :{count}</h1>
            <button onClick={()=>dispatch(increment())}>Inc</button>
            <button onClick={()=>dispatch(decrement())}>Dec</button>
        </div>
    )
}
export default Counter