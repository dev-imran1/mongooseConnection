import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log(connection)
    }catch(error){
console.log(error)
    }
}


export{dbConnect}