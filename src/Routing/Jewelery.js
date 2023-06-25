import React,{useState,useEffect} from "react";
import axios from "axios";

function Jewelery(props) {
  const [Jewelery,setJewelery]=useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
      axios.get(`http://localhost:3000/data/?category=jewelery`)
      .then((res)=>{
          console.log(res.data);
          setJewelery(res.data)
      })
  }, [])
  return(
   <div>
   {Jewelery.map((Jewelery)=>{
       return(
           <div>
           {/* <img height={100} src={product.image}/> */}
               
               <a href="/" ><p style={{color:"red"}}>{Jewelery.title}</p></a>
               
                </div>
       )
   })}
</div>
  )
}

export default Jewelery;