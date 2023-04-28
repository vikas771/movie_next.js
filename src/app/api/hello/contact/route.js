import dbConnect from "@/utils/dbCon";

import Contact from '../../../../model/contact'
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        
        const body = req.json();
        await dbConnect();

        await Contact.create(body)

        return NextResponse.json({
            message:"Message send successfully!"
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json(
            { message:"Server error, please try again" },
            { status: 500}
        )
    }
}