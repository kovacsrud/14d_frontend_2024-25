import { useState, useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Images() {
    const{update,authStatus,isAuthenticated,refresh}=useContext(UserContext);
    const[images,setImages]=useState([]);
    const[path,setPath]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        authStatus();
        console.log(isAuthenticated);
        if(isAuthenticated){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json"
                },
                credentials:'include'
            })
            .then(res=>res.json())
            .then(adatok=>{setImages(adatok.images);setPath(adatok.path);console.log(adatok)})
            .catch(err=>alert(err));
        } else {
            navigate('/login');
        }
        
    },[isAuthenticated,refresh]);


  return (
    <div>
        <h2 className="text-center font-bold text-2xl">Képek listája</h2>
                
        {            
           
                <div>
                    
                    {
                        isAuthenticated ? <>
                        {
                            images.map((image,i)=>(<img key={i} src={`${import.meta.env.VITE_BASE_URL}`+path+image.imageName} />))
                        }
                        </>
                        :
                        <><p>Nem vagy bejelentkezve</p></>
                    }
                </div>
           
            
        }
       
    </div>
  )
}

export default Images