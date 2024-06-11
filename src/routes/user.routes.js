import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
import { create } from "../controllers/todos.controllers.js"

const router = Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/create").post(create)

export default router