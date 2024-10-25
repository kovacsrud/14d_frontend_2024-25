import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Auto({ auto,frissites }) {

    const navigate=useNavigate();

    const [isDelete,setIsDelete]=useState(false);
    const [isModify,setIsModify]=useState(false);

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


    
    const torles=async (id)=>{
        const response=await fetch(`${import.meta.env.VITE_BASE_URL}/autok/${id}`,{
            method:"DELETE",
            headers:{'Content-type':'application/json'}
        });
        const valasz=await response.text();        
        alert(valasz);
        frissites();        
    }

    const modosit=(auto)=>{
        navigate("/modauto",{state:{auto}});
    }

  return (
    <div className="mx-auto m-5 card bg-teal-800 text-teal-50 w-96">
      {
        isDelete && (
          <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-black">Törlés!</h3>
          <p className="py-4 text-black">Biztosan törli?</p>
          <button className="btn" onClick={()=>torles(auto.id)}>Törlés</button>
          <button className="btn" onClick={()=>{closeDelete()}}>Bezár</button>          
        </div>
        )
      }

      {
        isModify && (
          <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-black">Módosítás!</h3>
          <p className="py-4 text-black">Biztosan módosítja?</p>
          <button className="btn" onClick={()=>modosit(auto)}>Módosítás</button>
          <button className="btn" onClick={()=>{closeModify()}}>Bezár</button>          
        </div>
        )
      }

      <div className="card-body">
        <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
        <p>Kor: {auto.kor} év</p>
        <p>Rendszám: {auto.rendszam}</p>
        <p>Színe: {auto.szin}</p> 
        <div className="card-actions justify-end">
            <button className="btn" onClick={()=>openDelete()}>Törlés</button>
            <button className="btn" onClick={()=>openModify()}>Módosítás</button>
        </div>       
      </div>
    </div>
  );
}

export default Auto;
