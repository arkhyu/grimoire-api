import { Request, Response } from 'express';
import { BookUseCase } from '../../../application/book/book.useCase.js';
import { DummyBookRepository } from '../../../infrastructure/repositories/dummyBook.repository.js';

const bookRepository = new DummyBookRepository();
const bookUseCase = new BookUseCase(bookRepository);

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookUseCase.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong fetching books' });
  }
};

export const postBook = (req: Request, res: Response) => {
  const bookData = req.body;
  res.status(201).json({ message: 'posted a book !!!! ', data: bookData });
};