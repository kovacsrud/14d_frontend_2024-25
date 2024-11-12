import { useContext,useState } from "react";
import KutyaContext from "../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyaForm() {

    const{kutyanevek,kutyafajtak,backendMuvelet}=useContext(KutyaContext);
    let cim="Új rendelési adat";
    const navigate=useNavigate();
    const {state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyak`;
    let method="POST";

    if(state!==null){
        const{kutya}=state;
        cim="Rendelési adat módosítása";
        method="PATCH";
        formObj={
            Id:kutya.Id,
            nevid:kutya.nevid,
            fajtaid:kutya.fajtaid,
            eletkor:kutya.eletkor,
            utolsoell:kutya.utolsoell
        }
    } else {
        formObj={
            nevid:1,
            fajtaid:1,
            eletkor:"",
            utolsoell:""
        }
    }

    const [formData,setFormData]=useState(formObj);

    const onSubmit=(e)=>{
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate('/kutyak');
    }

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

  return (
    <div>
        <h1 className="text-2xl text-center">{cim}</h1>
       
            <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">

                <select id="nevid" onChange={writeData} value={formData.nevid} className="select m-5 select-primary w-full max-w-xs">
                    {
                        kutyanevek.map((kutyanev,i)=>(<option key={i} value={kutyanev.Id}>{kutyanev.kutyanev}</option>))
                    }
                </select>

                <select id="fajtaid" onChange={writeData} value={formData.fajtaid} className=" m-5 select select-primary w-full max-w-xs">
                    {                        
                        kutyafajtak.map((kutyafajta,i)=>(<option key={i} value={kutyafajta.Id}>{kutyafajta.nev}</option>))                       
                    }            
                </select>

                <input id="eletkor" onChange={writeData} value={formData.eletkor} required type="text" placeholder="Életkor" className="m-5 input input-bordered input-primary w-full max-w-xs" />
                <input id="utolsoell" onChange={writeData} value={formData.utolsoell} required type="text" placeholder="Utolsó ellenőrzés" className="m-5 input input-bordered input-primary w-full max-w-xs" />
                <button className="m-5 btn btn-primary" type="submit">Küldés</button>
            </div>
            </form>
        
    </div>
  )
}

export default KutyaForm