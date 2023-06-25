import React,{useState} from "react";

function TimerApp2() {
    const [count, setCount] = useState(0);
    const intervalRef = React.useRef(null);
  
    const startCounter = () => {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    };
  
    const stopCounter = () => {
      clearInterval(intervalRef.current);
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={startCounter}>Start</button>
        <button onClick={stopCounter}>Stop</button>
      </div>
    );
  };
  
  export default TimerApp2;
  