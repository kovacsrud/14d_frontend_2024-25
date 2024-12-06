import { useContext } from "react";
import MegyeContext from "../contexts/MegyeContext";
import Telepules from "./Telepules";


function MegyeTelepulesek() {
    const{megyeTelepulesei,kivalasztottMegye}=useContext(MegyeContext);
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">{kivalasztottMegye}</h1>
        <div className="bg-lime-100 grid grid-cols-3 justify-items-center m-10"> 
        {
            megyeTelepulesei.map((telepules,i)=><Telepules key={i} telepules={telepules.telepulesnev} />)        
        }
      </div>

    </div>
  )
}

export default MegyeTelepulesek