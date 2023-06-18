import React from "react"
import B from "./B"
// import D from "./D"
import { useState } from "react"
import myContext from "./Mycontext"
function A(){
    const [state,setState]=useState("geeks")
    // const adata=state
    return(
        <div>
            <h2>A component</h2>
            
            <button onClick={(()=>{
                setState("geekster")
            })}>Change data</button>
           
            <myContext.Provider value={state} >
            <B />
            </myContext.Provider>
             
        </div>
    )
}

export default A