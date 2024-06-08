import { User } from "../models/users.model.js"
import bycript from "bcrypt"
const register = async (req, res) => {
    // res.send("api thke")
    // console.log(req.body);
    const { name, email, password } = req.body
    if ([name, email, password].some((field) => field?.trim() === "")) {
        res.send("data mising")
    }
    // const user = await User.create(name,email,password);



    const hashpassword = await bycript.hash(password, 10)

    const user = await User.create({ name:name, email:email, password:hashpassword })
    const user2 = await User.findById(user._id).select("-password")
    res.json({ message: "register don", user2})


}

export { register }