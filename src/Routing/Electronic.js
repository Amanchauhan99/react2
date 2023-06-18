/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { color } from "framer-motion";
import { background } from "@chakra-ui/react";

function Electronic() {
  
    // const [searchParams] =useSearchParams();
    // const id = searchParams.get('id') ;
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [electronics,setProduct]=useState([])

     // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(()=>{
         axios.get(`http://localhost:3000/data/?category=electronics`)
         .then((res)=>{
             console.log(res.data);
             setProduct(res.data)
         })
     }, [])
     return(
      <div>
      {electronics.map((electronics)=>{
          return(
              <div>
              {/* <img height={100} src={product.image}/> */}
                  
                  <a href="/" ><p style={{color:"red"}}>{electronics.title}</p></a>
                  
                   </div>
          )
      })}
  </div>
)
}


export default Electronic;