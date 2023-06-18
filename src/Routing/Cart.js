/* eslint-disable jsx-a11y/alt-text */
import {useEffect, useState} from "react";
// import {useEffect } from "react";
import axios from "axios";


function Cart(props){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product,setProduct]=useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        axios.get(`http://localhost:3000/data`)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
    },[])
    return(
        <div>
            <h2>cart</h2>
           
            {product.map((product)=>{
                return(
                    <div>
                        
                        <img height={100} src={product.image}/>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.id}</p>
                         <a href={`/productDetails/?id=${product.id}`}><button>Cart</button></a> 
                        
                    </div>
                )
            })

            }
        </div>
    )
}

export default Cart