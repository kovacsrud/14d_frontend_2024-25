import { useState, useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Image from "./Image";
import { toast } from "react-toastify";


function ImagesBin() {
    const{update,authStatus,isAuthenticated,refresh}=useContext(UserContext);
    const[images,setImages]=useState([]);
    const[binImages,setBinImages]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        authStatus();
        
        if(isAuthenticated){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/imagesbin`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json"
                },
                credentials:'include'
            })
            .then(res=>res.json())
            .then(adatok=>{
                console.log(adatok);
            })
            .catch(err=>toast.error(err));
        } else {
            navigate('/login');
        }
        
    },[isAuthenticated,refresh]);

  return (
    <div>ImagesBin</div>
  )
}

export default ImagesBin