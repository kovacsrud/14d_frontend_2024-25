import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import {useEffect} from 'react';

function Terkep({lng,lat,szeles,magas,zoom}) {

    mapboxgl.accessToken="pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ";
    useEffect(()=>{
        if(lng && lat){
            mapboxgl.workerClass=MapboxWorker;
            let map=new mapboxgl.Map({
                container:"mapContainer",
                style:"mapbox://styles/mapbox/streets-v11",
                center:[lng,lat],
                zoom:zoom
            });
            const marker=new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map);
        }
    },[lng,lat,zoom])


  return (
    <div id="mapContainer" style={{width:szeles,height:magas}}>

    </div>
  )
}

export default Terkep