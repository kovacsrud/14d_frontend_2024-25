import Tulajcard from "./tulajcard/page";

export default async function Tulajdonosok ()  {
    const tulajKeres=await fetch('http://localhost:3000/api/tulajdonosok',{cache:'no-store'});
    const tulajok=await tulajKeres.json();

    return (
        <div>
            <h1 className="text-center font-bold">Szerver oldali renderelés</h1>
            <div className="flex flex-row flex-wrap items-center justify-center">
            {
                tulajok.map((tulaj,i)=>(<Tulajcard key={i} tulaj={tulaj} />))
            }
            </div>
        </div>
    );
}