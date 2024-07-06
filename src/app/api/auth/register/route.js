import { message } from "@/libs/messages";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { connectDB } from "@/libs/mongobd";
import jwt from "jsonwebtoken" ;
import { cookies } from "next/headers";

export async function POST(request) {

    connectDB()

    const { name, lastName, dni ,phone , email, password , cbu} = await request.json()

    if (!password || !email || !name || !lastName || !dni || !phone) {
        return NextResponse.json({
            message: message.error.missingCredentials
        }, {
            status: 400
        })
    }

    if (password.length < 6) {
        return NextResponse.json({
            message: message.error.failurePassword
        }, {
            status: 400
        })
    }

    try {
        const userFound = await User.findOne({ email })
        
        if (userFound) {
            return NextResponse.json({
                message: message.error.invalidCredentials
            }, {
                status: 400
            })
        }

        const userPhone = await User.findOne({ phone })
        
        if (userPhone) {
            return NextResponse.json({
                message: message.error.invalidCredentials
            }, {
                status: 400
            })
        }

        const userDocument = await User.findOne({dni})
        if (userDocument) {
            return NextResponse.json({
                message: message.error.invalidCredentials
            }, {
                status: 400
            })
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            name, 
            lastName, 
            dni ,
            phone , 
            email,
            cbu,
            password: hashPassword
        })

        const userSaved = await newUser.save()

        const token = jwt.sign({ 
            id : userSaved._id,
            email : userSaved.email
        },"clave_secreta")

        console.log(token)
        
        const tokensaved = cookies().set('new_token', token)
        return NextResponse.json({token})
   
    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, {
                status: 400
            })
        }
    }
}