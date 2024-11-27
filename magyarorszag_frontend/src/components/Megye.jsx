
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import MegyeContext from "../contexts/MegyeContext";


function Megye({megye}) {
    const {kivalasztottMegye,setKivalasztottMegye}=useContext(MegyeContext);
    const navigate=useNavigate();

    const buttonClick=(megyenev)=>{
        setKivalasztottMegye(megyenev);
        console.log(kivalasztottMegye);
        navigate("/megyetelepulesek");

    }

  return (
    <div className="m-5 card bg-lime-300 text-lime-800 w-96">
    <div className="card-body">
      <h2 className="card-title">{megye.megyenev}</h2>
      
      <div className="card-actions justify-end">
        <button onClick={()=>buttonClick(megye.megyenev)} className="btn">Tovább</button>
      </div>
    </div>
  </div>
  )
}

export default Megye