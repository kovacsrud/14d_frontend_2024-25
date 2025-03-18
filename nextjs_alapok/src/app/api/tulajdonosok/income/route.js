import { NextResponse } from "next/server";
import { getCustomerIncome } from "../../../../../dblib/db";

export async function GET(req){

    const {searchParams}=new URL(req.url);
    const also=searchParams.get("also");
    const felso=searchParams.get("felso");

    if(!also || !felso){
        return NextResponse.json({message:"Hiányos paraméterek"},{status:404});
    }

    try {
        const customers=await getCustomerIncome(also,felso);
        if(customers.length<1){
            return NextResponse.json({message:"Nincsenek a feltételnek megfelelő adatok"},{status:404});
        }
        return NextResponse.json(customers,{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"Hiba a lekérdezés során!"},{status:500});
    }

}