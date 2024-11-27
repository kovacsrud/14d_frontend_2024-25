import {useState,useEffect,useContext, createContext} from 'react';

const TelepulesContext=createContext();

export const TelepulesProvider=({children})=>{
    const[telepulesnevek,setTelepulesnevek]=useState([]);
    const[selectedTelepules,setSelectedTelepules]=useState("");
    const[telepules,setTelepules]=useState({});

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/telepulesek`)
        .then(res=>res.json())
        .then(adat=>setTelepulesnevek(adat))
        .catch(err=>alert(err));
    },[]);

    useEffect(()=>{
        if(selectedTelepules!=""){
        fetch(`${import.meta.env.VITE_BASE_URL}/api/telepulesek/telepulesnev/${selectedTelepules}`)
        .then(res=>res.json())
        .then(adat=>{setTelepules(adat);console.log(adat)})
        .catch(err=>alert(err));
        }
    },[selectedTelepules])

    const getTelepules=(telepulesnev)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/telepulesek/telepulesnev/${telepulesnev}`)
        .then(res=>res.json())
        .then(adat=>{setTelepules(adat);console.log(adat)})
        .catch(err=>alert(err));
    }



    return <TelepulesContext.Provider value={{
        telepulesnevek,telepules,selectedTelepules,setTelepules,setSelectedTelepules,getTelepules
    }}>{children}</TelepulesContext.Provider>
}

export default TelepulesContext;