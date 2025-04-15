import { useState,useEffect } from "react"

function Forma1Test() {
    
    const[circuits,setCircuits]=useState({});

    useEffect(()=>{
        fetch("https://v1.formula-1.api-sports.io/circuits", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v1.formula-1.api-sports.io",
                "x-rapidapi-key": "65a706a6e3msh501db64947c058ap1025b0jsn331650856cfe"
            }
        })
        .then(res => res.json())
        .then(adat=>{setCircuits(adat);console.log(adat)})
        .catch(err => {
            alert(err);
        });
    },[]);

  return (
    <div>
        <h2 className="text-center">Pályák</h2>
        <p>{circuits.results}</p>

    </div>
  )
}

export default Forma1Test