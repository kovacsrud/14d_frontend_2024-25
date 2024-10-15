import { useState,useEffect } from "react";
import Auto from "./Auto";

function AutoLista() {
    const [autok,setAutok]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/autok')
        .then(res=>res.json())
        .then(adat=>setAutok(adat))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
        <h1 className="text-3xl text-center font-bold">Jelenlegi autóink:</h1>
        {
            autok.map((auto)=>(<Auto key={auto.id} auto={auto} />))
        }

    </div>
  )
}

export default AutoLista