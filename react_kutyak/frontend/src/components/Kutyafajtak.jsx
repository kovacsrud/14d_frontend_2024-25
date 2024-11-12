import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyafajta from "./Kutyafajta";

function Kutyafajtak() {

  const {kutyafajtak}=useContext(KutyaContext);

  return (
    <div>
      <h1 className="text-3xl text-sky-800 text-center font-bold">Kutyafajták</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        kutyafajtak.map((kutyafajta,i)=><Kutyafajta key={i} kutyafajta={kutyafajta}/>)
      }
      </div>
    </div>
  )
}

export default Kutyafajtak