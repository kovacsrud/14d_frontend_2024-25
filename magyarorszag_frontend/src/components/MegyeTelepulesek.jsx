import { useContext } from "react";
import MegyeContext from "../contexts/MegyeContext";


function MegyeTelepulesek() {
    const{megyeTelepulesei,kivalasztottMegye}=useContext(MegyeContext);
  return (
    <div>
        <h1>{kivalasztottMegye}</h1>
        <div className="bg-lime-100 grid grid-cols-3 justify-items-center m-10"> 
        {
            megyeTelepulesei.map((telepules,i)=><p key={i}>{telepules.telepulesnev}</p>)        
        }
      </div>

    </div>
  )
}

export default MegyeTelepulesek