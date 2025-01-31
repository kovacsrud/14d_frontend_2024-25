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
    },[isAuthenticated]);

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append("file"+i,images[i]);                        
        }
        kuldes(formData);
        navigate('/vedett');
    }

    const kuldes=(adat)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/files/upload`,{
            method:'POST',
            credentials:'include',
            body:adat
        })
        .then(res=>res.json())
        .then(valasz=>{alert("Feltöltés:"+valasz.message);update()})
        .catch(err=>alert("Hiba:"+err));
    }

    const imageChange=(e)=>{
        console.log(e.target.files);
        //setImages([]);
        setImages([...images,...e.target.files]);
    }


  return (
    <div>
        <h2 className="text-center font-bold text-2xl">Képek feltöltése</h2>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={onSubmit}>
                <input onChange={imageChange} className="file-input file-input-bordered" type="file" multiple required />
                <button className="btn btn-primary" type="submit">Feltöltés</button>

            </form>
        </div>
    </div>
  )
}

export default ImageUpload