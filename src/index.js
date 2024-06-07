import { app } from "./app.js";
import { dbConnect } from "./db/mognodbConfig.js";

dbConnect();

app.listen("8000", () => {
    console.log('server is runing from main.js')
})
