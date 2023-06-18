import {useState} from "react";
function Counter(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[count,setCount]=useState(0);
    
    const increment=()=>{
        setCount(count+1);
        // return count
        console.log(count);
    }
    const decrement=()=>{
        setCount(count-1);
        console.log(count);
        return count
    }
    return( 
        <div>
            <h3>Counter App</h3>
            <h4>Counter : {count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter