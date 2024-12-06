import { useContext } from "react";
import TipusContext from "../contexts/TipusContext";
import Telepules from "./Telepules";

function JogallasTelepulesek() {
    const{tipusTelepulesek,kivalasztottTipus}=useContext(TipusContext);
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">{kivalasztottTipus}</h1>
        <div className="bg-lime-100 grid grid-cols-3 justify-items-center m-10"> 
        {
            tipusTelepulesek.map((telepules,i)=><Telepules key={i} telepules={telepules.telepulesnev} />)        
        }
      </div>

    </div>
  )
}

export default JogallasTelepulesek