import { useState,useEffect } from "react";

function Lista() {

    const [lista,setLista]=useState([]);

    useEffect(()=>{
        const adatok=["Békéscsaba","Gyula","Orosháza","Csorvás","Kunszentmiklós"];
        //const adatok=[];
        setLista(adatok);
    },[]);

  return (
    <div>
        <h2>Városok:</h2>
        <ul>
            {
                lista.length>0 ? 
                <>
                {
                  lista.map((elem,i)=>(<li key={i}>{elem}</li>))
                }
                </> 
                :
                <>
                 <p>A lista üres!</p>
                </>
                
            }
        </ul>
    </div>
  )
}

export default Lista