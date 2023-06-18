import React from "react"

import D from "./D"
// import {state} from "./B"
function C({state}){
    return(
        <div>
            <h2>C component</h2>
            {/* <p>{state}</p> */}
            <D state={state}/>
        </div>
    )
}
export default C