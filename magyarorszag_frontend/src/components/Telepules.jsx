import {useContext} from "react";
import TelepulesContext from "../contexts/TelepulesContext";
import {useNavigate} from "react-router-dom";

function Telepules({ telepules }) {
    const {setSelectedTelepules}=useContext(TelepulesContext);
    const navigate=useNavigate();

    const buttonClick=()=>{
        setSelectedTelepules(telepules);
        navigate('/telepulesadatok');
    }


  return (
    <div className="m-5 card bg-lime-300 text-lime-800 w-96">
      <div className="card-body">
        <h2 className="card-title">{telepules}</h2>
        
        <div className="card-actions justify-end">
          <button onClick={buttonClick} className="btn">Tovább</button>
        </div>
      </div>
    </div>
  );
}

export default Telepules;
