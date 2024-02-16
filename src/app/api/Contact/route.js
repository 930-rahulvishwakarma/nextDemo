import dbconnection from "@/Utils/dbconnection";
import Contact from "@/Models/Contact";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    try {
        const body = req.json();
        console.log(body);
        await dbconnection();

        await Contact.create(body);
        return NextResponse.json(
            {message:"success"},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {message:"Something went wrong"},
            {status:400}
        )
    }
 }

