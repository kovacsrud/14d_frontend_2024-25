
import { useState,useEffect,useContext } from "react";
import UserContext from "../context/UserContext";
import {useNavigate} from 'react-router-dom';


function Vedett() {
  const[vedettinfo,setVedettInfo]=useState({});
  const{authStatus}=useContext(UserContext);
  const navigate=useNavigate();

  const token=sessionStorage.getItem('usertoken');

  useEffect(()=>{
    if(token){
      fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
        method:'GET',
        credentials:'include',
        headers:{
          "Content-type":"application/json",
          //"Authorization":`Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
          if(!data.message){
            setVedettInfo(data);
          } else {
            authStatus();            
            alert(data.message);
          }

      })
      .catch(err=>alert(err));

    } else {
      navigate('/login');
    }
  },[]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">{vedettinfo.username}</h1>
    </div>
  )
}

export default Vedett