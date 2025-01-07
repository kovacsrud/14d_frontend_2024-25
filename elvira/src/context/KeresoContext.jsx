import { useState,createContext } from "react";

const KeresoContext=createContext();

export const KeresoProvider=({children})=>{
    const aktDatum=new Date().getFullYear()+"-"+String(new Date().getMonth()+1).padStart(2,"0")+"-"+String(new Date().getDate()).padStart(2,"0");    
    const[vonatok,setVonatok]=useState([]);
    const[from,setFrom]=useState("");
    const[to,setTo]=useState("");
    const[datum,setDatum]=useState(aktDatum);

    const kereses=(from,to)=>{
        console.log(`${import.meta.env.VITE_BASE_URL}?from=${from}&to=${to}`);

        fetch(`${import.meta.env.VITE_BASE_URL}?from=${from}&to=${to}`)
        .then(res=>res.json())
        .then(adatok=>setVonatok(adatok.timetable))
        .catch(err=>alert(err));
    }


    return <KeresoContext.Provider value={{
        vonatok,
        setVonatok,
        kereses,
        from,
        setFrom,
        to,
        setTo,
        datum,
        setDatum

    }}>{children}</KeresoContext.Provider>
}

export default KeresoContext;