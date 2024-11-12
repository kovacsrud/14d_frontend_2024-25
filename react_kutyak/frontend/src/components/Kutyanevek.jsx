import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyanev from "./Kutyanev";

function Kutyanevek() {

  const {kutyanevek}=useContext(KutyaContext);

  return (
    <div>
      <h1 className="text-3xl text-sky-800 text-center font-bold">Kutyanevek</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        kutyanevek.map((kutyanev,i)=><Kutyanev key={i} kutyanev={kutyanev} />)
      }
      </div>
    </div>
  )
}

export default Kutyanevek