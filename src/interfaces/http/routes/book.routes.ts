import {Router} from 'express';
import { getBooks, postBook } from '../controllers/book.controller.js';

const router = Router();

router.get('/books',getBooks);
router.post('/book',postBook);

export default router;