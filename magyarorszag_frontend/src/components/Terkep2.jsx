import { useEffect, useState,useContext } from "react";
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import TelepulesContext from "../contexts/TelepulesContext";



function Terkep2(props) {

    
    const{szeles,magas,zoom}=props
    const {selectedTelepules}=useContext(TelepulesContext);
    const[telepules,setTelepules]=useState({});


    const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ'; // Cseréld ki a saját tokenedre         
    
    useEffect(()=>{
      console.log("Selected:"+selectedTelepules);
      if(selectedTelepules!=""){
        fetch(`${import.meta.env.VITE_BASE_URL}/api/telepulesek/telepulesnev/${selectedTelepules}`)
        .then(res=>res.json())
        .then(adat=>{setTelepules(adat);console.log(adat)})
        .catch(err=>alert(err));
        }   
        
    },[])
    

  return (
    <div className="flex flex-row items-center justify-center m-10">
      
      {
        telepules.lat &&  telepules.lng &&(<Map
          initialViewState={{
            longitude: telepules.lng,
            latitude: telepules.lat,
            zoom: zoom,
          }}
          style={{ width: szeles, height: magas }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker longitude={telepules.lng} latitude={telepules.lat} />
        </Map>)
      }
       

    </div>
  )
}

export default Terkep2