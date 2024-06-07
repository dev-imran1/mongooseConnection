import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// app.use // use k ekhane middleware hisebe bebohar kora hoyeche.
//ap.use(express.json)  //middleware er vitore json formate e data asebe // image jodi ase tahole multer use korte hbe.
//cors er kaj holo kon origin thke resource share hobe. kon url e hit korle ki chalu hobe. * dile sob domin thke server use korte parbe

app.use(express.json({ limit: "16kb" })); //frontend theke id,password,mail asbe etar maddome. eta na dile asbe na. (16kb hote hobe)
app.use(express.urlencoded({ limit: "16kb", extended: true })); //eta hosse url er code
app.use(cors({
    origin: "*"
    // origin: "http://localhost:8000"
}))
app.use(cookieParser())

export { app }