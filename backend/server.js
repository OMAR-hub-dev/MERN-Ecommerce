import  express from 'express';
import data from './data.js';





const app = express();
app.get('/api/products', (req, res)=>{
    res.send(data.products);
});
// pour recuperer le detail de mon produit 
app.get('/api/products/slug/:slug', (req, res)=>{
    const product = data.products.find((x) => x.slug === req.params.slug);
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found'});
    }
});

//pour confirmer la quantité d'un produit
app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found'});
    }
});
// app.get('/', (req, res) =>{
//     res.send('Server is ready');
// });

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
});