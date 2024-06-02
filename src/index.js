import {app} from "./app.js";
import { dbConnect } from "./db/index.js";

app.listen("8000", () =>{
    console.log('server is runing')
})