import {Router} from 'express';
import { getBooks, postBook } from '../controllers/bookController.js';

const router = Router();

router.get('/books',getBooks);
router.post('/book',postBook);

export default router;