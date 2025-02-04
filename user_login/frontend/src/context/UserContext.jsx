import { useState,createContext } from "react";

const UserContext=createContext();

export const UserProvider=({children})=>{

    const[refresh,setRefresh]=useState(false);
    const[isAuthenticated,setIsAuthenticated]=useState(false);

    const authStatus=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/user/auth`,{
            method:'GET',
            credentials:'include',
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(auth=>{
            if(auth.authenticated){
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                sessionStorage.removeItem('usertoken');
                update();

            }
        })
        .catch(err=>{alert(err);setIsAuthenticated(false)});

    }

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const logout=(tokenName)=>{
        sessionStorage.removeItem(tokenName);
        setIsAuthenticated(false);
        backendLogout();
        update();
    }

    const backendLogout=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/user/kilepes`,{
            method:"POST",
            credentials:'include'
        })
        .then(res=>res.json())
        .then(auth=>{
            if(auth.message && auth.message=="Kijelentkezve"){
                setIsAuthenticated(false);
            }
        })
        .catch(err=>{alert(err);setIsAuthenticated(false)})
    }

    const keptorles=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
            method:"DELETE",
            headers:{"Content-type":"application/json"},
            credentials:'include',
            body:JSON.stringify({imageId:imageId})
        })
        .then(res=>res.json())
        .then(valasz=>{
            if(valasz.message){
                alert(valasz.message);
                update();
            } else {
                alert(valasz);
            }
        })
        .catch(err=>alert("Hiba!"+err+" "+imageId));
    }



    return<UserContext.Provider value={{
        refresh,
        update,
        logout,
        authStatus,
        isAuthenticated,
        keptorles
        
    }}>{children}</UserContext.Provider>
}

export default UserContext;