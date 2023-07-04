import React from 'react'
import './ui.css'
import { FaRegPaperPlane,FaRegCreditCard} from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
const UI = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
            <h2>Rahul Arora</h2>
            <ul>
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprise</li>
            <li>Resource</li>
            <li>Education</li>
            </ul>
            
        </div>
        <div className="right">
           <ul> 
            <li>Contact</li>
            <li>Login</li>
            </ul>
            <button>Logout</button>
        </div>
      </div>
      <div className="main">
        <div style={{margin:"50px 0px"}}>
            <div style={{margin:'20px auto'}} className="content">
            <h1 style={{textAlign:"center",color:"white",fontSize:"50px"}}>See Value From Social Sooner</h1>
            <p style={{textAlign:"center",color:"white",fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, esse.</p>
            <button style={{width:"150px",padding:"15px",backgroundColor:"rgb(26, 103, 26)",margin:"10px 700px",color:'white',fontSize:"15px",fontWeight:"400",border:"none"}}>Request Demo</button>
            </div>
        </div>
      </div>
      <div className="footer">
        <div className="same first">
             <FaRegPaperPlane className='font'/>
             <h3>2500</h3>
             <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="same second">
        < FaRegCreditCard className='font'/>
             <h3>45,000</h3>
             <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="same third">
        < MdPeopleAlt className='font'/>
             <h3>200,000</h3>
             <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </>
  )
}

export default UI