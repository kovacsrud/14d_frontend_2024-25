import { useState,useEffect } from "react";
import Character from "./Character";


function Characters() {
    const [characters,setCharacters]=useState([]);
    const [info,setInfo]=useState({});
    const [page,setPage]=useState(1);
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res=>res.json())
        .then(adat=>{
            setCharacters(adat.results);
            setInfo(adat.info);
        })
        .catch(err=>console.log(err));
    },[page]);

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

  return (
    <div>
        <div className="m-5 mx-auto w-40 join grid grid-cols-2">
            <button onClick={vissza} className="join-item btn btn-outline">Vissza</button>
            <button onClick={tovabb} className="join-item btn btn-outline">Tovább</button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
            characters.map((karakter)=>(<Character key={karakter.id} karakter={karakter} />))
        }
        </div>
        
        <div className="m-5 mx-auto w-40 join grid grid-cols-2">
            <button onClick={vissza} className="join-item btn btn-outline">Vissza</button>
            <button onClick={tovabb} className="join-item btn btn-outline">Tovább</button>
        </div>
    </div>
  )
}

export default Characters