import { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function ImageUpload() {
    const {update,authStatus,isAuthenticated}=useContext(UserContext);
    const navigate=useNavigate();
    const[images,setImages]=useState([]);

    useEffect(()=>{
        authStatus();
        if(!isAuthenticated){
            navigate('/login');
        }
    },[])


  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload