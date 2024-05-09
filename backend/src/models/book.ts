import mongoose from "mongoose";
import { BookType } from "../shared/types";

const bookSchema = new mongoose.Schema<BookType>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    bookPDFURL: { type: String, required: true },
});

const Book = mongoose.model<BookType>("Book", bookSchema);

export default Book;