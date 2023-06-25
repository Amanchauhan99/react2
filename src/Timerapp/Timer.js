import React,{useState,useEffect} from "react";

function TimerApp() {
    const [count, setCount] = useState(0);
    const [Running, setRunning] = useState(false);
  
    const startCounter = () => {
      setRunning(true);
    };
  
    useEffect(() => {
      let Id;
      if (Running) {
        Id = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }
      return () => {
        clearInterval(Id);
        console.log(Id);
      };
    }, [Running]);
  
    const stopCounter = () => {
      setRunning(false);
    };
    const Reset = () => {
        setRunning(false);
        setCount(0)
      };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={startCounter}>Start</button>
        <button onClick={stopCounter}>Stop</button>
        <button onClick={Reset}>Reset</button>
      </div>
    );
  };
  
  export default TimerApp;
  