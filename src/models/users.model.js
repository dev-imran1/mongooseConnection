// shcema bolte bujay==> database e ki ki jabe seta;

import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique: true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    todos:[
        {
            type:Schema.Types.ObjectId,
            ref:"todos"
        }
    ]
},{
    timestamps:true
})


export const User = mongoose.models.User ?? mongoose.model("User", userSchema)
