import express, { Request, Response } from "express";
import { BookType } from "../shared/types";
import Book from "../models/book";

const router = express.Router();

router.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello from express endpoint"});
});

router.post("/add_book", async (req: Request, res: Response) => {
    try {
        const newBook: BookType = req.body;

        const book = new Book(newBook);
        await book.save();

        res.status(201).send(book);

    } catch (error) {
        console.log("Error adding book: ", error);
        res.status(500).json({message: "Something went wrong"});
    }
});

export default router;