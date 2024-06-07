import mongoose from "mongoose";
const dbConnect = async () => {
    // console.log(process.env.MONGODB_CONNECTION_URL);

    try {
        const {connections} = await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log("ami mongodb theke",connections[0].name)
    } catch (error) {
        throw new Error(error.message);
    }
}


export { dbConnect };

