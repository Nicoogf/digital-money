import { connectDB } from "@/libs/mongobd"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(request){    
    connectDB()
    const { email , password } = await request.json()
    console.log(email, password)

    const userFound = await User.findOne({email})

    if(!userFound){
        return NextResponse.json({message : "No se encontro el usuario"},{status:400})
    }

    const isMatch = await bcrypt.compare(password , userFound.password)
    console.log(isMatch)

    if(!isMatch){
        return NextResponse.json({message : "Credenciales incorrectas"},{status:400})
    }

    return NextResponse.json({email})
}