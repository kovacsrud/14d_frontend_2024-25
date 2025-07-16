import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyafajta from "./Kutyafajta";
import { useNavigate } from "react-router-dom";

function Kutyafajtak() {

  const {kutyafajtak}=useContext(KutyaContext);
  const navigate=useNavigate();

  const formnyit=()=>{
    navigate("/kutyafajtaform");
  }


  return (
    <div>
      <h1 className="text-3xl text-sky-800 text-center font-bold">Kutyafajták</h1>
      <div className="m-5 text-center">
          <button onClick={formnyit} className="w-28 p-2 btn btn-primary">Új kutyafajta rögzítése</button>
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        kutyafajtak.map((kutyafajta,i)=><Kutyafajta key={i} kutyafajta={kutyafajta}/>)
      }
      </div>
    </div>
  )
}

export default Kutyafajtak