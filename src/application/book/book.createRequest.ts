import { BoundIn } from "../../domain/book/book.model.js";

export interface CreateBookRequest {
  title: string;
  author: string;
  boundIn?: BoundIn;
  isCursed: boolean;                
}