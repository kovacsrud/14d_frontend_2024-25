import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";


function ModAuto() {

    const {state}=useLocation();

    const {auto} =state;



    const [id,setId]=useState(auto.id);
    const [marka,setMarka]=useState(auto.marka);
    const [tipus,setTipus]=useState(auto.tipus);
    const [kor,setKor]=useState(auto.kor);
    const [rendszam,setRendszam]=useState(auto.rendszam);
    const [szin,setSzin]=useState(auto.szin);
    
    const navigate=useNavigate();

  const adatkuldes=async (adat,method,url)=>{
    const response=await fetch(url,{
        method:method,
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(adat)
    });

    const valasz=await response.text();
    navigate("/autolista");
    alert(valasz);
    
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    adatkuldes({id,marka,tipus,kor,rendszam,szin},"PATCH",`http://localhost:8000/autok/${id}`);    
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Új autó felvétele:</h1>
      <form onSubmit={onSubmit} className="flex flex-col justify-items-center">
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="id" className="input input-bordered input-success w-full max-w-xs"/>
        <input type="text" value={marka} onChange={(e)=>setMarka(e.target.value)} placeholder="márka" className="input input-bordered input-success w-full max-w-xs"/>
        <input type="text" value={tipus} onChange={(e)=>setTipus(e.target.value)} placeholder="típus" className="input input-bordered input-success w-full max-w-xs"/>
        <input type="text" value={kor} onChange={(e)=>setKor(e.target.value)} placeholder="kor" className="input input-bordered input-success w-full max-w-xs"/>
        <input type="text" value={rendszam} onChange={(e)=>setRendszam(e.target.value)} placeholder="rendszám" className="input input-bordered input-success w-full max-w-xs"/>
        <input type="text" value={szin} onChange={(e)=>setSzin(e.target.value)} placeholder="szín" className="input input-bordered input-success w-full max-w-xs"/>
        <button className="btn btn-primary" type="submit">Küldés</button>
      </form>
    </div>
  );
}

export default ModAuto