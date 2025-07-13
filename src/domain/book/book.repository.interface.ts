import { Book } from "./book.model.js";

export interface BookRepository {
  getAll(): Promise<Book[]>;
  create(book: Book): Promise<Book>;
}