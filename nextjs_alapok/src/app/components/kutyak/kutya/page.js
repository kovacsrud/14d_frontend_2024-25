'use client'
import { useSearchParams } from "next/navigation";

export default function Kutya(){
    const params=useSearchParams();
    

    return (
        <h1>Id és név:{params.get("id")},{params.get("nev")}</h1>
    )
}

