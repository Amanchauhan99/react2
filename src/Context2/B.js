import React from "react"
import C from "./C"
// import {useContext } from "react"
// import myContext from "./Mycontext"
function B(props){
    // let data=useContext(myContext)
    // let contextData=useContext()
    return(
        <div>
            <h2>B component</h2>
            {/* <p>{data}</p> */}
            <C/>
            
        </div>
    )
}
export default B