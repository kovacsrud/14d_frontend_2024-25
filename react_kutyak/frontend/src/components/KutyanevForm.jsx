import { useContext,useState } from "react";
import KutyaContext from "../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyanevForm() {

    const{backendMuvelet}=useContext(KutyaContext);
    let cim="Új kutyanév rögzítése";
    const navigate=useNavigate();
    const {state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyanevek`;
    let method="POST";

     if(state!==null){
        const{kutyanev}=state;
        
        cim="Kutyanév módosítása";
        method="PATCH";
        formObj={
            Id:kutyanev.Id,
            kutyanev:kutyanev.kutyanev            
        }
    } else {
        formObj={
            kutyanev:""            
        }
    }

    const [formData,setFormData]=useState(formObj);

    const onSubmit=(e)=>{
        e.preventDefault();
        backendMuvelet(formData,method,url);
        console.log(url);
        navigate('/kutyanevek');
    }

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }


  return (
    <div>
       <h1 className="text-2xl text-center">{cim}</h1>
       
            <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">                                         
                <input id="kutyanev" onChange={writeData} value={formData.kutyanev} required type="text" placeholder="Utolsó ellenőrzés" className="m-5 input input-bordered input-primary w-full max-w-xs" />
                <button className="m-5 btn btn-primary" type="submit">Küldés</button>
            </div>
            </form>
        
    </div>
  )
}

export default KutyanevForm