import { useState,useEffect } from "react";
import Auto from "./Auto";

function AutoLista() {
    const [autok,setAutok]=useState([]);
    const [refresh,setRefresh]=useState(false);

    const frissites=()=>{
        setRefresh(prev=>!prev);
    }



    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/autok`)
        .then(res=>res.json())
        .then(adat=>setAutok(adat))
        .catch(err=>console.log(err))
    },[refresh])

  return (
    <div>
        <h1 className="text-3xl text-center font-bold">Jelenlegi autóink:</h1>
        {
            autok.map((auto)=>(<Auto key={auto.id} auto={auto} frissites={frissites} />))
        }

    </div>
  )
}

export default AutoLista