import { app } from "./app.js";
import { dbConnect } from "./db/mognodbConfig.js";

let PORT = process.env.PORT || 8000   //prot jodi na thake tahole 8000 pabe.

dbConnect();

app.listen(PORT, () => {
    console.log('server is runing from main.js', PORT)
})
