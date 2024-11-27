import { useContext } from "react";
import MegyeContext from "../contexts/MegyeContext";
import Megye from "./Megye";

function Megyek() {
  const{megyek}=useContext(MegyeContext);
  return (
    <div className="bg-lime-100">
      <h1 className="text-3xl font-bold text-center">Megyék:</h1>
      <div className="grid grid-cols-3 justify-items-center m-10"> 
      {
        megyek.map((megye,i)=>(<Megye key={i} megye={megye} />))
      }
      </div>
    </div>
  )
}

export default Megyek