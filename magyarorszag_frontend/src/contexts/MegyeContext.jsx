import {useState,useEffect,useContext, createContext} from 'react';

const MegyeContext=createContext();

export const MegyeProvider=({children})=>{



    return <MegyeContext.Provider value={{

    }}>{children}</MegyeContext.Provider>
}

export default MegyeContext;