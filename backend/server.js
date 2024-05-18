import  express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
// import data from './data.js';




dotenv.config();
// connecter mongodb via mongoose
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log('connected to db')})
.catch((err)=>{console.log(err.message)});


const app = express();
//pour convertir la dta en post en format json
app.use (express.json());
app.use(express.urlencoded({extended: true}));

// 
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

// defined error handler from express
app.use((err,req, res, next)=>{
    res.status(500).send({message: err.message});
});


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