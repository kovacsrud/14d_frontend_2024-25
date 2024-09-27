import { useState } from "react";


function Counter({start}) {

    const [counter,setCounter]=useState(start);
    const novel=()=>{
        setCounter(prev=>prev+1);
    }

    const csokkent=()=>{
        setCounter(prev=>prev-1);
    }

    const reset=()=>{
        setCounter(0);
    }

  return (
    <div>
        <h2>{counter}</h2>        
        <p onClick={novel}>Növel</p>
        <p onClick={csokkent}>Csökkent</p>
        <p onClick={reset}>Reset</p>
    </div>
  )
}

export default Counter