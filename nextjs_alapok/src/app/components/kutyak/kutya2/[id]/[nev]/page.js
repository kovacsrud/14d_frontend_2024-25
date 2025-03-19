'use client'
import { useParams } from "next/navigation";

export default function Kutya2(){
    const {id,nev}=useParams();

    return (
        <h1 className="text-center">Id:{id}, Név:{nev}</h1>
    )
}