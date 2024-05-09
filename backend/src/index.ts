import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";

import bookRoutes from './routes/book';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello from express endpoint"});
});

app.use("/api/book", bookRoutes);

app.listen(7000, () => {
    console.log("Backend Server is running on localhost:7000");
});