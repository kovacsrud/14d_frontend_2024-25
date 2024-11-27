import {useState,useEffect,useContext, createContext} from 'react';

const MegyeContext=createContext();

export const MegyeProvider=({children})=>{
    const[megyek,setMegyek]=useState([]);
    const[megyeTelepulesei,setMegyeTelepulesei]=useState([]);
    const[kivalasztottMegye,setKivalasztottMegye]=useState("");

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/megyek`)
        .then(res=>res.json())
        .then(adat=>setMegyek(adat))
        .catch(err=>alert(err));
    },[]);

    useEffect(()=>{
        if(kivalasztottMegye!==""){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/megyek/megye/${kivalasztottMegye}`)
            .then(res=>res.json())
            .then(adat=>{setMegyeTelepulesei(adat);console.log(adat)})
            .catch(err=>alert(err));
        }
        
    },[kivalasztottMegye]);





    return <MegyeContext.Provider value={{
        megyek,kivalasztottMegye,megyeTelepulesei,setKivalasztottMegye

    }}>{children}</MegyeContext.Provider>
}

export default MegyeContext;