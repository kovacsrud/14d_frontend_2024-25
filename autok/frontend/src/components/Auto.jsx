

function Auto({ auto,frissites }) {

    

    const torles=async (id)=>{
        const response=await fetch(`http://localhost:8000/autok/${id}`,{
            method:"DELETE",
            headers:{'Content-type':'application/json'}
        });
        const valasz=await response.text();        
        alert(valasz);
        frissites();        
    }
  return (
    <div className="mx-auto m-5 card bg-teal-800 text-teal-50 w-96">
      <div className="card-body">
        <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
        <p>Kor: {auto.kor} év</p>
        <p>Rendszám: {auto.rendszam}</p>
        <p>Színe: {auto.szin}</p> 
        <div className="card-actions justify-end">
            <button className="btn" onClick={()=>torles(auto.id)}>Törlés</button>
            <button className="btn">Módosítás</button>
        </div>       
      </div>
    </div>
  );
}

export default Auto;
