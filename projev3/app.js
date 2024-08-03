import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import sayfakontrol from "./routes/cardsRoute.js";
import qartkontrol from "./routes/kartRoute.js"
dotenv.config();

conn();

const app = express();
const port =process.env.PORT;

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());

app.use("/",sayfakontrol);

app.use("/kart",qartkontrol);






app.listen(port,() => {
    console.log('App şurda calisiyor : '+port)
});