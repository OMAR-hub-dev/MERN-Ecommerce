import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {type:String, required:true, unique: true},
        slug: {type:String, required:true, unique: true},
        image: {type:String, required:true, },
        brand: {type:String, required:true, },
        category: {type:String, required:true, },
        description: {type:String, required:true, },
        price: {type:Number, required:true, },
        countInStock: {type:Number, required:true, },
        rating: {type:Number, required:true, },
        numReviews: {type:Number, required:true, },
    },
    {
        timestamps: true
    }
);

// model prend 2 param le premier c'est le nom et le 2éme schéma
const Product = mongoose.model('Product', productSchema);
export default Product;