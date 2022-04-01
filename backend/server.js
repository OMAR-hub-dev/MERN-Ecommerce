import  express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';




dotenv.config();
// connecter mongodb via mongoose
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log('connected to db')})
.catch((err)=>{console.log(err.message)});


const app = express();
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter);

// test
// app.get('/api/products', (req, res)=>{
//     res.send(data.products);
// });

// app.get('/', (req, res) =>{
//     res.send('Server is ready');
// });

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
});