import Modal from "./Modal";
import { useState,useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate} from 'react-router-dom';

function Kutyanev({kutyanev}) {

  const navigate=useNavigate();
    const {backendMuvelet}=useContext(KutyaContext);

    const url=`${import.meta.env.VITE_BASE_URL}/kutyanevek`;

    const [isDelete,setIsDelete]=useState(false);
    const [isModify,setIsModify]=useState(false);

    const modosit=(kutya)=>{
      navigate('/kutyanevform',{state:{kutyanev}});
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
        isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>backendMuvelet(kutyanev,"DELETE",url)} closeFunction={closeDelete} />)
      }
      {
        isModify && (<Modal title="Módosítás" body="Biztosan Módosítja?" commitFunction={()=>modosit(kutyanev)} closeFunction={closeModify} />)
      }
  <figure>
    <img className="w-16"
      src="https://www.svgrepo.com/show/434054/dog.svg"
      alt="kutyanev" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{kutyanev.kutyanev}</h2>
    <p>Azonosító:{kutyanev.Id}</p>
    <div className="card-actions justify-end">
        <button onClick={openModify} className="btn btn-primary">Módosítás</button>
        <button onClick={openDelete} className="btn btn-primary">Törlés</button>
    </div>
  </div>
  </div>
  )
}

export default Kutyanev