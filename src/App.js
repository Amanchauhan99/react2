// import logo from './logo.svg';
// import './App.css';
// import Users from './Json-user/Users';
// import Propscomp from "./Propscomp"
// import Counter from "./Counter"
// import Image from "./Image"
// import Profile from "./Profile"
// import Users from './API/Users';
// import Pagination from "./Pagination/Pagination"; 
// import Github from "./Github/Github";
// import { useState } from "react";
// import A from "./context/A" 
// import Nav from "./Nav/Nav"
// import Login from "./Contextprovider/Login"
// import Home from "./Contextprovider/Home"


// import Nav from './Nav';
import User from './gituser/User';
import Hello from './classcomponent/Hello';
import TodoApp from './TodoApp/MainTodo';
import TimerApp2 from './Timerapp/Timer2';
import Drop from './Useref/Drop';
import Index from './Malefemale';
import PollingApp from './Polling/Polling';

function App() {
  // // function fn(){
  // //   alert("My Profile");
  // const [isLoggedIn,setIsLoggedIn]=useState(false)
  // const login=()=>{
  //   setIsLoggedIn(true)
  // }
  // const logout=()=>{
  //   setIsLoggedIn(false)
  // }
    return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <Propscomp isCapable={false} desc={{description:"This card is of the professional which is traind in JAVASCRIPT"}} name={["swatika"]} fn={fn} id={101} gender="female" img="https://thumbs.dreamstime.com/b/portrait-successful-mature-businesswoman-arms-crossed-confident-business-professional-female-smiling-smart-suit-business-180283728.jpg" />
    //    <Propscomp isCapable={true} desc={{description:"This card is of the professional which is traind in ANGULAR"}} name={["Ranjan"]} fn={fn} id={103} gender='male' img='https://media.istockphoto.com/id/1138563417/photo/african-american-businessman-smiling-on-grey.jpg?s=612x612&w=0&k=20&c=BA7cBTeFK-y0akeJlQhTT4PZ632Cci7CMjuPhWU3bTc=' />
    //    <Propscomp isCapable={false} desc={{description:"This card is of the professional which is traind in REACT.js"}} name={["Randeep"]}  fn={fn} id={104} gender='male' img='https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg' />
    //     {/* <Propscomp name={["swatika"]} /> */}
    // </div>
    <div className="App">
      {/* <Counter /> */}
      {/* <Image />*/}
       {/* <Profile /> */}
       {/* <Users/> */}
          {/* <Pagination/> */}

          {/* <Github/> */}
          {/* <A/> */}
          {/* <Nav isLoggedIn={isLoggedIn} logout={logout} />
          {isLoggedIn ? <Home/>: <Login login={login}/>} */}
          {/* <Hello name="aman"/>  */}
          <PollingApp/>

    </div>

  );

}

export default App;
