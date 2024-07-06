import { connectDB } from "@/libs/mongobd"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

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

    try {
        const token = jwt.sign({ 
            id : userFound._id,
            email : userFound.email
        },"clave_secreta")
    
        const tokensaved = cookies().set('new_token', token)
        return NextResponse.json({tokensaved, usuarioLogueado: userFound.email})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }   
}