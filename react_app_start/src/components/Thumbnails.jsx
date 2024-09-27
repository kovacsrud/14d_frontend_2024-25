import { useState,useEffect } from "react";

function Thumbnails() {
    const [images,setImages]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=>res.json())
        .then(kepek=>setImages(kepek))
        .catch(err=>console.log(err));
    },[])


  return (
    <div>
        <h1>Thumbnails</h1>
        <div className="d-flex flex-row flex-wrap">
        {
            images.map((kep)=>(<img key={kep.id} src={kep.thumbnailUrl} />))
        }
        </div>

    </div>
  )
}

export default Thumbnails