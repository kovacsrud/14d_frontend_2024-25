import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import TipusContext from '../contexts/TipusContext';

function Jogallas({tipus}) {

    const {kivalasztottTipus,setKivalasztottTipus}=useContext(TipusContext);
    const navigate=useNavigate();

    const buttonClick=(tipus)=>{
        setKivalasztottTipus(tipus);
        console.log(tipus);
        navigate("/jogallastelepulesek");

    }


  return (
    <div>
        <div className="m-5 card bg-lime-300 text-lime-800 w-96">
    <div className="card-body">
      <h2 className="card-title">{tipus.jogallas}</h2>
      
      <div className="card-actions justify-end">
        <button onClick={()=>buttonClick(tipus.jogallas)} className="btn">Tovább</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Jogallas