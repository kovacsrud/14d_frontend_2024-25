import { useContext } from "react";
import { useLocation } from "react-router-dom";
import TelepulesContext from "../contexts/TelepulesContext";
import Terkep2 from "./Terkep2";
import Terkep from "./Terkep";

function TelepulesAdatok() {
  //const{state}=useLocation();
  //const{telepules}=state;
  const { selectedTelepules, telepules } = useContext(TelepulesContext);

  return (
    <div className="h-full">
      <h1 className="text-3xl text-lime-800 font-bold text-center">
        {selectedTelepules}
      </h1>
     

      <div class="bg-lime-100 flex justify-center items-center w-screen p-5">
        <div class="border shadow-lime-800 shadow-md max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
          <h1 class="text-4xl font-mono font-extrabold py-3">
            {selectedTelepules}
          </h1>
          <ul class="list-disc text-lg px-6">
            <li>Település neve: {telepules.telepulesnev}</li>
            <li>Megye: {telepules.megyenev}</li>
            <li>Milyen település: {telepules.jogallas}</li>
            <li>Koordináták:: lat: {telepules.lat}, lon:{telepules.lng}</li>
          </ul>
        </div>
      </div>

      <Terkep2
        telepules={telepules}
        szeles={"400px"}
        magas={"400px"}
        zoom={13}
      />
      <Terkep
        telepules={telepules}
        szeles={"400px"}
        magas={"400px"}
        zoom={13}
      />
    </div>
  );
}

export default TelepulesAdatok;
