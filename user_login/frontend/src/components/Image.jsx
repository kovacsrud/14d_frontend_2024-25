import {useState,useContext} from 'react';
import UserContext from '../context/UserContext';
import Modal from './Modal';

function Image({path,image}) {
    const{keptorles}=useContext(UserContext);
    const[isDelete,setIsDelete]=useState(false);

    const openDelete=()=>{
        setIsDelete(true);
    }

    const closeDelete=()=>{
        setIsDelete(false);
    }

  return (
    <div className="card bg-sky-200 w-96 shadow-xl m-2">
        {
            isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>keptorles(image._id)} closeFunction={()=>closeDelete()} />)
        }
  <figure>
    <img
      src={`${import.meta.env.VITE_BASE_URL}`+path+image.imageName}
      alt={image.imageName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{image.imageName}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-secondary" onClick={()=>openDelete()}>Törlés</button>
    </div>
  </div>
</div>
  )
}

export default Image