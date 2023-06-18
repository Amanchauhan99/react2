import React from "react"
import B from "./B"
// import D from "./D"
import { useState } from "react"
function A(props){
    const [state,setState]=useState("geeks")
    // const adata=state
    return(
        <div>
            <h2>A component</h2>
            {/* <p>{state}</p> */}
            <button onClick={(()=>{
                setState("geekster")
            })
            }>Change data</button>
            
            <B state={state}/>
            {/* <D state={state}/> */}
        </div>
    )
}

export default A