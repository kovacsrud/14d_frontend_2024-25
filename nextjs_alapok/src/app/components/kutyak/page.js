'use client'
import {useState,useEffect} from 'react';


export default function Kutyak () {
    const[kutyak,setKutyak]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/kutyak')
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>alert(err));
    },[])

    return (
        <div>
            <h1 className='text-center'>Kutyák:{kutyak.length}</h1>
            {
                kutyak.map((kutya,i)=>(<p key={i} >{kutya.utolsoell}</p>))
            }
        </div>
    );
}