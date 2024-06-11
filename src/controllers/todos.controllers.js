import { Todos } from "../models/todos.modle.js";

const create = async (req, res) => {
    const { title, description, completed, user } = req.body
    if ([title, description].some((filed) => { filed === "" })) {
        res.json({ error: "sob lagbe", statusCode: 4000 })
    }
    const todo = await Todos.create(title, description, completed, user)
    res.send({message: "create done", data:todo, statusCode: 200})
}

export { create }