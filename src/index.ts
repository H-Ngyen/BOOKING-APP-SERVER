import express, { Request, Response } from "express";
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoute from "./routes/userRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("mongoose connected")
}).catch(err => {
    console.log('mongodb connection error: ' + err)
})

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/users",userRoute);

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "endpoint oke" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});