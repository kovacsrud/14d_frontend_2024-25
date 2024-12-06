import {useState,useEffect,useContext, createContext} from 'react';

const TipusContext=createContext();

export const TipusProvider=({children})=>{
    const[tipusok,setTipusok]=useState([]);
    const[tipusTelepulesek,setTipusTelepulesek]=useState([]);
    const[kivalasztottTipus,setKivalasztottTipus]=useState("");

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/jogallasok/`)
        .then(res=>res.json())
        .then(adat=>setTipusok(adat))
        .catch(err=>alert(err));
    },[]);

    useEffect(()=>{
        if(kivalasztottTipus!==""){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/jogallasok/jogallas/${kivalasztottTipus}`)
            .then(res=>res.json())
            .then(adat=>{setTipusTelepulesek(adat);console.log(adat)})
            .catch(err=>alert(err));
        }
    },[kivalasztottTipus]);




    return <TipusContext.Provider value={{
        tipusok,
        tipusTelepulesek,
        kivalasztottTipus,
        setKivalasztottTipus

    }}>{children}</TipusContext.Provider>
}

export default TipusContext;