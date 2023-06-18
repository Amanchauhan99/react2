import React,{useContext} from "react"
import myContext from "./Mycontext"
function D(){
    let data=useContext(myContext)
    return(
        <div>
           
            <h1>D component</h1>
            <p>{data}</p>
        </div>
    )
}
export default D