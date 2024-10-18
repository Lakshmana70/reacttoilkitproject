import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { deletecard } from "./producslice";
function Addtocard(){
    const {card}=useSelector(state=>state.productsapp)
    console.log(card)
    const dispatch=useDispatch()
    return(
        <div  style={{width:"700px", height:'500px', overflow:'auto' , border:"1px solid",padding:"10px", marginTop:"10px"}} className='shadow p-3 mb-5 bg-body-tertiary rounded"'>
        <h1>Cart: {card.length}</h1>
        <p>Your basket looks a little empty. why not check out some of our unbittable deals</p>
        {
            card.map((s,i)=>{

                return <div className='d-flex border border-2 justify-content-lg-between bg-success '>
                   
                   <h5 className='text-light p-2 m-2'>{s.title.slice(0,10)} </h5>
                   <p className='text-light p-2 m-2'>{s.price}Rs</p>
                   <button onClick={()=>dispatch(deletecard(i))} className="btn btn-primary btn-danger w-25 h-20 p-0 ">Delete</button>
                </div>
            })
        }
          <h1>Total : {
            card.reduce((a,b)=>{
                return a+b.price
            },0)
            }Rs</h1>,
    </div>
    )
}
export default Addtocard


