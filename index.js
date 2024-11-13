import e from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import Route from "./routes/route.js";
import Connection from "./database/db.js";

const app = e();

Connection();

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Route)

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
