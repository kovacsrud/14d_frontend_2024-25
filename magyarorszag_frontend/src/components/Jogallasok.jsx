import { useContext } from "react";
import TipusContext from "../contexts/TipusContext";
import Jogallas from "./Jogallas";

function Jogallasok() {
  const{tipusok}=useContext(TipusContext);
  return (
    <div className="bg-lime-100">
      <h1 className="text-3xl font-bold text-center">Település típusok</h1>
      <div className="grid grid-cols-3 justify-items-center m-10"> 
      {
        tipusok.map((tipus,i)=>(<Jogallas key={i} tipus={tipus} />))
      }
      </div>
    </div>
  )
}

export default Jogallasok