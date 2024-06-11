import { Router } from "express";
import {create} from "../controllers/todos.controllers.js";

const router = Router();

router.route("/create").post(create)

export default router