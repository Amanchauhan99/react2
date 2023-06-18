import React from "react"
import C from "./C"
// import {state} from "./A"
function B({state}){
    return(
        <div>
            <h2>B component</h2>
            <p></p>
            <C state={state}/>
        </div>
    )
}
export default B