import express from 'express';
import bookRoutes from './interfaces/http/routes/book.routes.js';

const app = express();

app.use(express.json());
app.use('/api',bookRoutes);

app.use((req,res)=> {
    res.status(404).json({error:"Not found"})
});

export default app;
