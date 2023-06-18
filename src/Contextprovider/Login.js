import React,{useState} from "react";

function Login({login}){
    const [user,setUser]=useState({
        name:"",
        password:""
    })
    const verifyCrendentials=()=>{
        if(user.name==="aman" && user.password==="aman123"){
        login();
        
    }else{
        alert("enter proper");
    }
}
    return(
        <div>
            <div>Login Component</div>
            <input placeholder="username" onChange={(event)=>{
                setUser({
                    ...user,
                    name:event.target.value
                })
            }}></input><br/>
            <input placeholder="password" onChange={(event)=>{
                setUser({
                    ...user,
                    password:event.target.value
                })
            }}/> <br/>
        
        <button onClick={verifyCrendentials}
        >login</button>
        </div>
    )
}
export default Login