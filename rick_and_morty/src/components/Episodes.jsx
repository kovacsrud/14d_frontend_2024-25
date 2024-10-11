import { useState,useEffect } from "react";
import Episode from "./Episode";

function Episodes() {
    const [episodes,setEpisodes]=useState([]);
    const [info,setInfo]=useState({});
    const [page,setPage]=useState(1);

    const tovabb=()=>{
        if(page<info.pages){
            setPage(prev=>prev+1);
        }
    }

    const vissza=()=>{
        if(page>1){
            setPage(prev=>prev-1);
        }
    }

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then(res=>res.json())
        .then(adat=>{setInfo(adat.info);setEpisodes(adat.results)})
        .catch(err=>console.log(err));
    },[page])

  return (
    <div>
         <div className="m-5 mx-auto w-40 join grid grid-cols-2">
            <button onClick={vissza} className="join-item btn btn-outline">Vissza</button>
            <button onClick={tovabb} className="join-item btn btn-outline">Tovább</button>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
            episodes.map((episode)=>(<Episode key={episode.id} episode={episode} />))
        }
        </div>
         <div className="m-5 mx-auto w-40 join grid grid-cols-2">
            <button onClick={vissza} className="join-item btn btn-outline">Vissza</button>
            <button onClick={tovabb} className="join-item btn btn-outline">Tovább</button>
        </div>
    </div>
  )
}

export default Episodes