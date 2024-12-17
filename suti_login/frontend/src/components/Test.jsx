import { useState,useEffect } from "react";


function Test() {
    const [message,setMessage]=useState({});

    useEffect(()=>{
        fetch('https://localhost:8000/test',{
            method:'GET',
            credentials:'include'
        })
        .then(res=>res.json())
        .then(adat=>setMessage(adat))
        .catch(err=>alert(err));
    },[])
  return (
    <div>
         <h2 className="text-2xl font-bold text-center">{message.message}</h2>
    </div>
  )
}

export default Test