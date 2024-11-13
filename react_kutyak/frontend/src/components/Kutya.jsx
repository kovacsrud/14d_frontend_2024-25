import Modal from "./Modal";
import { useState,useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate} from 'react-router-dom';


function Kutya({kutya}) {

    const navigate=useNavigate();
    const {backendMuvelet}=useContext(KutyaContext);

    const url=`${import.meta.env.VITE_BASE_URL}/kutyak`;

    const [isDelete,setIsDelete]=useState(false);
    const [isModify,setIsModify]=useState(false);

    const modosit=(kutya)=>{
      navigate('/kutyaform',{state:{kutya}});
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
        isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>backendMuvelet(kutya,"DELETE",url)} closeFunction={closeDelete} />)
      }
      {
        isModify && (<Modal title="Módosítás" body="Biztosan Módosítja?" commitFunction={()=>modosit(kutya)} closeFunction={closeModify} />)
      }
    <figure>
      <img className="w-16"
        src="https://www.svgrepo.com/show/405231/dog-face.svg"
        alt="kutyanev" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kutya neve: {kutya.kutyanev}</h2>
      <h2 className="card-title">Életkor: {kutya.eletkor}</h2>
      <h2 className="card-title">Utolsó ellenőrzés: {kutya.utolsoell}</h2>
      <p>Azonosító:{kutya.Id}</p>
      <div className="card-actions justify-end">
          <button onClick={openModify} className="btn btn-primary">Módosítás</button>
          <button onClick={openDelete} className="btn btn-primary">Törlés</button>
      </div>
    </div>
    </div>
  )
}

export default Kutya