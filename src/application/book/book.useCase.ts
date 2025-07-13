import { Book } from '../../domain/book/book.model.js';
import { BookRepository } from '../../domain/book/book.repository.interface.js';


export class BookUseCase {
  constructor(private bookRepo: BookRepository) {}

  async getBooks(): Promise<Book[]> {
    const books = await this.bookRepo.getAll();
    return books;
  }
}