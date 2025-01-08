import { useContext } from "react";
import KeresoContext from "../context/KeresoContext";
import Vonat from "./Vonat";


function Kereso() {
    const{vonatok,kereses,from,to,setFrom,setTo,datum,setDatum,via,setVia}=useContext(KeresoContext);
  return (
    <div>
    <div className="p-8 mt-8 max-w-lg mx-auto">
    <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">Keresés</h1>
    
        <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="from" className="leading-7 py-4 text-lg text-gray-900">Honnan</label>
                <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)} id="from" name="from" required
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
            </div>
        </div>
        <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="to" className="leading-7 py-4 text-lg text-gray-900">Hová</label>
                <input type="text" value={to} onChange={(e)=>setTo(e.target.value)} id="to" name="to" required
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="via" className="leading-7 py-4 text-lg text-gray-900">Keresztül</label>
                <input type="text" value={via} onChange={(e)=>setVia(e.target.value)} id="via" name="via" 
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="to" className="leading-7 py-4 text-lg text-gray-900">Nap</label>
                <input type="date" value={datum} onChange={(e)=>setDatum(e.target.value)} id="datum" name="datum" required
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
     
        <div className="p-2 w-full">
            <div>
                <button onClick={()=>kereses(from,to,via,datum)}
                    className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                    Keresés
                </button>
            </div>
            </div>
    
</div>
<div className="flex flex-col items-center justify-center">
    {
        typeof vonatok===undefined || vonatok==null  ?
        <>
         <p className="text-2xl font-bold text-center">Nincs találat!</p>
        </>
        :
        <>
         {
            vonatok.map((vonat,i)=><Vonat key={i} vonat={vonat} />)
         }
        </>

        
    }
</div>
</div>    
  )
}

export default Kereso