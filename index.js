import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
import Expresence from "./models/ExpresenceModel.js";
dotenv.config();
const app = express();

// Aktifkan jika ingin melakukan migrate
// Users.sync();
// Expresence.sync();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log(`Server running at port 3000 `));