import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutya from "./Kutya";
import { useNavigate } from "react-router-dom";


function Kutyak() {
  const {kutyak}=useContext(KutyaContext);
  const navigate=useNavigate();
  const formnyit=()=>{
    navigate("/kutyaform");
  }

  return (
    <div>
        <h1 className="text-3xl text-sky-800 text-center font-bold">Rendelési adatok:</h1>
        <div className="m-5 text-center">
          <button onClick={formnyit} className="w-24 p-2 btn btn-square">Új rendelési adat</button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
          {
            kutyak.map((kutya,i)=><Kutya key={i} kutya={kutya} />)
          }
        </div>
      </div>
  )
}

export default Kutyak