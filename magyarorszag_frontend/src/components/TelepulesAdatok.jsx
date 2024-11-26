import { useContext } from "react";
import TelepulesContext from "../contexts/TelepulesContext";
import Terkep2 from "./Terkep2";

function TelepulesAdatok() {
    const{selectedTelepules,telepules}=useContext(TelepulesContext);
  return (
    <div>
        <h1 className="text-3xl text-lime-800 font-bold text-center">{selectedTelepules}</h1>
        <p className="text-xl font-bold text-lime-700 mx-10">Település neve: {telepules.telepulesnev}</p>
        <p className="text-xl font-bold text-lime-700 mx-10">Megye: {telepules.megyenev}</p>
        <p className="text-xl font-bold text-lime-700 mx-10">Milyen település: {telepules.jogallas}</p>
        <p className="text-xl font-bold text-lime-700 mx-10">Koordináták:: lat: {telepules.lat}, lon:{telepules.lng}</p>
        <Terkep2 telepules={telepules} szeles={"400px"} magas={"400px"} zoom={13}/>
    </div>
  )
}

export default TelepulesAdatok