import { Generador_CBU } from "@/libs/alias";
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true , "El nombre es requerido"]
    },
    lastName: {
        type: String,
        require: [true , "El Apellido es requerido"]
    },
    dni:{
        type: Number,
        require: [true , "El Documento es requerido"],
        unique: true
    },
    phone:{
        type:Number,
        require: [true , "El Documento es requerido"],
        unique: true
    },
    email: {
        type: String,
        unique: true,
        require: [true , "El email es requerido"]
    },
    password: {
        type: String,
        require: [true , "La contraseña es requerida"],
        minLength: 6
    },
    cbu:{
        type: Number,
        default: Generador_CBU (),
        unique: true
    }
})

const User =  models.User || model("User", UserSchema)
export default User ;