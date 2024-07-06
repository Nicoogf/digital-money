import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { connectDB } from "@/libs/mongobd";
import User from "@/models/User";

export async function POST() {

    const cookieStore = cookies()
    const token = cookieStore.get('new_token')

   
    try {
        connectDB()
        const  datos_usuario  = jwt.verify(token.value , "clave_secreta")
        const email =  datos_usuario.email
        console.log(email)

        const usuario_encontrado = await User.findOne({email})
        console.log(usuario_encontrado)

        return NextResponse.json(usuario_encontrado)      
    } catch (error) {        
            return NextResponse.json({
                message : error 
            },{status:400})
}}