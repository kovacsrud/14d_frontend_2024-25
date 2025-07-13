import { useSelector,useDispatch } from "react-redux";
import {novel,csokkent,novelErtekkel} from "../reducers/counterSlice";

function Szamlalo() {
    const szamlalo=useSelector((state)=>state.szamlalo.value);
    const dispatch=useDispatch();

  return (
    <div>
        <h2 className="text-2xl font-bold text-center">Számláló:{szamlalo}</h2>
        <button onClick={()=>dispatch(novel())} className="btn btn-primary m-2">Növel</button>
        <button onClick={()=>dispatch(csokkent())} className="btn btn-primary m-2">Csökkent</button>
    </div>
  )
}

export default Szamlalo