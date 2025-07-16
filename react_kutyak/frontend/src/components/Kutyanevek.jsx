import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyanev from "./Kutyanev";
import { useNavigate } from "react-router-dom";

function Kutyanevek() {

  const {kutyanevek}=useContext(KutyaContext);
  const navigate=useNavigate();
  const formnyit=()=>{
    navigate("/kutyanevform");
  }

  return (
    <div>
      <h1 className="text-3xl text-sky-800 text-center font-bold">Kutyanevek</h1>
       <div className="m-5 text-center">
          <button onClick={formnyit} className="w-28 p-2 btn btn-primary">Új kutyanév rögzítése</button>
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        kutyanevek.map((kutyanev,i)=><Kutyanev key={i} kutyanev={kutyanev} />)
      }
      </div>
    </div>
  )
}

export default Kutyanevek