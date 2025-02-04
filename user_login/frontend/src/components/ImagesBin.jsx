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
                let tempimages=[];
                adatok.forEach(image=>{
                    let arrayBuffer=new Uint8Array(image.imageData.data);
                    const blob=new Blob([arrayBuffer],{type:"image/png"});
                    const img=URL.createObjectURL(blob);
                    tempimages.push(img);
                });
                setImages(adatok);
                setBinImages(tempimages);
            })
            .catch(err=>toast.error(err));
        } else {
            navigate('/login');
        }
        
    },[isAuthenticated,refresh]);

  return (
    <div>
        {
            binImages.map((image,i)=>(<p key={i}>
                <img className="w-48" src={image} />
                {images[i].imageName}

            </p>))
        }
    </div>
  )
}

export default ImagesBin