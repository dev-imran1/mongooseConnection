import { User } from "../models/users.model.js"
import bycript from "bcrypt"
const register = async (req, res) => {
    // res.send("api thke")
    // console.log(req.body);
    const { name, email, password } = req.body
    if ([name, email, password].some((field) => field?.trim() === "")) {
        res.send("data mising")
    }
    const hashpassword = await bycript.hash(password, 10)
    const user = await User.create({ name:name, email:email, password:hashpassword })
    const user2 = await User.findById(user._id).select("-password")
    res.json({ message: "register don", data:user2})
}



const login = async (req, res) =>{
    const {email, password} = req.body;
    if ([email, password].some((field) => field?.trim() === "")) {
        res.json({error:"sob lagbe", statusCode:4000})
    }
    const user = await User.findOne({email})
    if (!user) {
        res.send("invalid email")   
    }
    const isPasswordCorrect = await bycript.compare(password, user.password) 
    if (!isPasswordCorrect) {
        res.send("invalid password")
    }

    const user2 = await User.findById(user._id).select("-password")
    res.send({message: "login done", data:user2, statusCode: 200})
}

export { register , login}