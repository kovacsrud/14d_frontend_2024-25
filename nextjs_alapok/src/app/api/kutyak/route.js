import { NextResponse } from "next/server";
import { getAllKutya } from "../../../../dblib/db";

export async function GET() {

    try {
        const kutyak=await getAllKutya();
        return NextResponse.json(kutyak,{status:200});
        
    } catch (error) {
        return NextResponse.json({error:'Hiba a lekérdezés során:'+error},{status:500});
    }
    
}