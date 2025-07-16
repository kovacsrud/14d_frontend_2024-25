import Modal from "./Modal";
import { useState,useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate} from 'react-router-dom';

function Kutyafajta({kutyafajta}) {

  const navigate=useNavigate();
    const {backendMuvelet}=useContext(KutyaContext);

    const url=`${import.meta.env.VITE_BASE_URL}/kutyafajtak`;

    const [isDelete,setIsDelete]=useState(false);
    const [isModify,setIsModify]=useState(false);

    const modosit=(kutyafajta)=>{
      navigate('/kutyafajtaform',{state:{kutyafajta}});
    }

    const openDelete=()=>{
      setIsDelete(true);
    }

    const closeDelete=()=>{
      setIsDelete(false);
    }

    const openModify=()=>{
      setIsModify(true);
    }

    const closeModify=()=>{
      setIsModify(false);
    }


  return (
    <div className="m-5 card card-side bg-sky-300 shadow-xl">
       {
        isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>backendMuvelet(kutyafajta,"DELETE",url)} closeFunction={closeDelete} />)
      }
      {
        isModify && (<Modal title="Módosítás" body="Biztosan Módosítja?" commitFunction={()=>modosit(kutyafajta)} closeFunction={closeModify} />)
      }
    <figure>
      <img className="w-16"
        src="https://www.svgrepo.com/show/405227/dog.svg"
        alt="kutyanev" />
    </figure>
    <div className="card-body w-80">
      <h2 className="card-title">{kutyafajta.nev}</h2>
      <h2 className="card-title">{kutyafajta.eredetinev}</h2>
      <p>Azonosító:{kutyafajta.Id}</p>
      <div className="card-actions justify-end">
          <button onClick={openModify} className="btn btn-primary">Módosítás</button>
          <button onClick={openDelete}className="btn btn-primary">Törlés</button>
      </div>
    </div>
    </div>
  )
}

export default Kutyafajta