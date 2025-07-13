import { Book } from "../../domain/book/book.model.js";
import { BookRepository } from "../../domain/book/book.repository.interface.js";
import { randomUUID } from "crypto";

export class DummyBookRepository implements BookRepository {
  private books: Book[] = [
    {
      id: randomUUID(),
      title: "Magic recipes from the Shire",
      author: "Anonymous",
      boundIn: "dragon hide",
      isCursed: true,
    },
    {
      id: randomUUID(),
      title: "Cooking for wizards",
      author: "Gan-dal the grey",
      boundIn: "leather",
      isCursed: false,
    },
  ];

  async getAll(): Promise<Book[]> {
    // Simulate async behavior
    return Promise.resolve(this.books);
  }
  create(book: Book): Promise<Book> {
    throw new Error("Method not implemented.");
  }
}
