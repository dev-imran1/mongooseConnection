import mongoose, { Schema, Types } from "mongoose";

const todosSchema = new Schema({
    title:{
        type:true,
        required: true
    },
    description: {
        type:true,
        required: true
    },
    completed:{
        type:Boolean,
        default:false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

export const Todos = mongoose.models.Todos ?? mongoose.model("Todos", todosSchema);

// console.log(01:00:00)
