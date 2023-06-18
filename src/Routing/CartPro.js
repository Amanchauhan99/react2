/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function CartPro(){
    const [searchParams] =useSearchParams();
    const id = searchParams.get('id') ;
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [product,setProduct]=useState([])

     // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(()=>{
         axios.get(`http://localhost:3000/data/?id=${id}`)
         .then((res)=>{
             console.log(res.data);
             setProduct(res.data)
         })
     }, [id])
     return(
        <div>
            {product.map((product)=>{
                return(
                    <div>
                    <img height={100} src={product.image}/>
                        <h2>aman</h2>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.rating.count}</p>
                        <p>{product.rating.rate}</p>
                         </div>
                )
            })}
        </div>
     )
    }
export default CartPro