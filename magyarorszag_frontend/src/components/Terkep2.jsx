import { useEffect, useRef,useContext } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import TelepulesContext from "../contexts/TelepulesContext";

function Terkep2(props) {

    const{telepules}=useContext(TelepulesContext);   
    const{szeles,magas,zoom}=props

    const mapContainer = useRef(null);
    const map = useRef(null);
    mapboxgl.accessToken = "pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ";
    useEffect(()=>{
        console.log("Település:"+telepules.telepulesnev);
      //  console.log("Lat:"+lat+" Lon:"+lng);
    },[telepules])
    // useEffect(()=>{
        
    //     if(map.current) return;
    //     map.current=new mapboxgl.Map({
    //         container:mapContainer.current,
    //         style:"mapbox://styles/mapbox/streets-v11",
    //         center:[lng,lat],
    //         zoom:zoom
    //     });
    //     new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map.current);

    //     map.current.on("error", (e) => {
    //         console.error("Mapbox error:", e.error);
    //       });


    //     return ()=>map.current?.remove();
    // },[])

  return (
    <div ref={mapContainer} style={{width:szeles,height:magas}}>
        <h1 className="text-2xl">{telepules.telepulesnev}</h1>
        <h1 className="text-2xl">{telepules.lat}</h1>
        <h1 className="text-2xl">{telepules.lng}</h1>

    </div>
  )
}

export default Terkep2