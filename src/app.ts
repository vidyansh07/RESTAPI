
import express from 'express';

const app = express();

//Routes
//Http methods : GET, POST, PUT, DELETE, PATCH
app.get('/', (  req, res) => res.json({massage : 'Hello World!'}));


export default app;