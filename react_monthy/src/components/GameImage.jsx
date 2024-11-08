import Goat from "../assets/base_goat.jpg";
import Door from "../assets/base_door.jpg";
import Car from "../assets/base_car1.jpg";

function GameImage({selected}) {
  return (
    <div>
        {
            selected==1 && (<img className="w-60 h-72 p-2" src={Door}/>) ||
            selected==2 && (<img className="w-60 h-72 p-2" src={Goat}/>) ||
            selected==3 && (<img className="w-60 h-72 p-2" src={Car}/>)

        }        
    </div>
  )
}

export default GameImage