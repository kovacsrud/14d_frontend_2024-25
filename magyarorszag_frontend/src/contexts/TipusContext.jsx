import {useState,useEffect,useContext, createContext} from 'react';

const TipusContext=createContext();

export const TipusProvider=({children})=>{



    return <TipusContext.Provider value={{

    }}>{children}</TipusContext.Provider>
}

export default TipusContext;