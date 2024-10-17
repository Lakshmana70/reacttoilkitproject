import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodos } from "./todolistslice";
import { deletetodos } from "./todolistslice";

function Todos(){
  var {todosdata}=useSelector(state=>state.todo)
  console.log(todosdata)
   const tref=useRef()
   const dispatch=useDispatch()
   console.log(tref.current?.value)
    return (
        <div>
            <h1>Todos</h1>
            <input type="text" ref={tref}/>
            <button onClick={()=>dispatch(addtodos(tref.current.value))} >Addtodo</button>
            {
                todosdata.map((a,i)=>{return(
                    <li>{a}<button onClick={()=>dispatch(deletetodos(i))}>delete</button></li>
                )})
            }
        </div>
    )
}
export default Todos