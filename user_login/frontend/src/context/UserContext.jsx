import { useState,createContext } from "react";

const UserContext=createContext();

export const UserProvider=({children})=>{

    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const logout=(tokenName)=>{
        sessionStorage.removeItem(tokenName);
        update()
    }



    return<UserContext.Provider value={{
        refresh,
        update,
        logout
    }}>{children}</UserContext.Provider>
}

export default UserContext;