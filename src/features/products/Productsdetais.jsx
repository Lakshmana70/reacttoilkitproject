import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addtocard } from "./producslice";
function Productsdetails(){
      var {products}= useSelector(state=>state.productsapp)
      const {card}=useSelector(state=>state.productsapp)
      const dispatch=useDispatch()
      
    return (
           <div>
           <center> <h1 style={{marginBottom:'0px'}}>Products Details</h1></center>
        <div className="d-flex  " style={{gap:'10px',margin:'10px'}} >
            
        <div className="d-flex" style={{border:'1px solid ',width:'950px',height:'900px',overflow:'auto'}}>
        <div className="d-flex flex-wrap p-2" >
            
            {
                products.map((s,i)=>{
                    return (
           <div className="d-flex flex-wrap">
             <div class="card m-2 p-3  shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
                <img src={s.image} class="card-img-top "  style={{width:"200px",height:'200px',marginLeft:'25px'}}  />
                <div class="card-body">
                 <h5 class="card-title text-center">{s.title.slice(0,10)}</h5>
               
                {
                    card.some((a)=>{
                        if(a.id==s.id){return true}
                    })?<button className="btn btn-primary btn-warning">Go To Card</button>:<a class="btn btn-primary btn-success" onClick={()=>{dispatch(addtocard(s,i))}}>Add to card</a>


                }
                &nbsp;
                
                <a href="#" class="btn btn-primary">{s.price}Rs</a>
                
             </div>
       
            </div>
        </div>
                    )
                })
                
            }
        </div>
       
        </div>
         
            <Outlet></Outlet>
        </div>
        </div>
    
    )
}
export default Productsdetails