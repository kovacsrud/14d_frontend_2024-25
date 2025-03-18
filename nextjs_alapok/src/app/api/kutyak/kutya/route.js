import { NextResponse } from "next/server";
import { getKutya } from "../../../../../dblib/db";

export async function GET(req){
    const {searchParams}=new URL(req.url);
    const id=searchParams.get("id");

    try {
        const kutya=await getKutya(id);
        if(kutya.length<1){
            return NextResponse.json({message:"Nincs ilyen kutya!"},{status:200});
        }
        return NextResponse.json(kutya[0],{status:200});
    } catch (error) {
        NextResponse.json({error:"Hiba a lekérdezéskor"},{status:500});        
    }

}