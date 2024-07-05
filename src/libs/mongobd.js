import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb://localhost:27017/aplicacion")
        if (connection.readyState === 1) {
            console.log("MongoDB connected")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
};
