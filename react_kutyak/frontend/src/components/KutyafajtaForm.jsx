import { useContext,useState } from "react";
import KutyaContext from "../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyafajtaForm() {

  const{backendMuvelet}=useContext(KutyaContext);
    let cim="Új kutyafajta rögzítése";
    const navigate=useNavigate();
    const {state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyafajtak`;
    let method="POST";

     if(state!==null){
        const{kutyafajta}=state;
        
        cim="Kutyafajta módosítása";
        method="PATCH";
        formObj={
            Id:kutyafajta.Id,
            nev:kutyafajta.nev,
            eredetinev:kutyafajta.eredetinev            
        }
    } else {
        formObj={
            nev:"",
            eredetinev:""            
        }
    }

     const [formData,setFormData]=useState(formObj);

    const onSubmit=(e)=>{
        e.preventDefault();
        backendMuvelet(formData,method,url);
        console.log(url);
        navigate('/kutyafajtak');
    }

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }


  return (
    <div>
       <h1 className="text-2xl text-center">{cim}</h1>
       
            <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">                                         
                <input id="nev" onChange={writeData} value={formData.nev} required type="text" placeholder="A fajta neve" className="m-5 input input-bordered input-primary w-full max-w-xs" />
                <input id="eredetinev" onChange={writeData} value={formData.eredetinev} required type="text" placeholder="A fajta eredeti neve" className="m-5 input input-bordered input-primary w-full max-w-xs" />
                <button className="m-5 btn btn-primary" type="submit">Küldés</button>
            </div>
            </form>
    </div>
  )
}

export default KutyafajtaForm