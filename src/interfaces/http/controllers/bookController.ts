import { Request, Response } from 'express';

export const getBooks = (req: Request, res: Response) => {
  res.status(200).json({ message: 'imagine this is a list of books' });
};

export const postBook = (req: Request, res: Response) => {
  const bookData = req.body;
  res.status(201).json({ message: 'posted a book !!!! ', data: bookData });
};