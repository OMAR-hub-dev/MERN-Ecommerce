import bcrypt from 'bcryptjs';

const data = {
    users:[
      {
        name: 'omar',
        email: 'admin@example.com',
        password: bcrypt.hashSync('pass'),
        isAdmin : true,
      },
      {
        name: 'amir',
        email: 'user@example.com',
        password: bcrypt.hashSync('pass'),
        isAdmin: false,
      }
    ],
    products: [
      {
        // _id :'1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/c_polo-shirt.png', // 679px × 829px
        price: 120,
        countInStock: 0,
        brand: 'Nike',
        rating: 2.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        // _id :'2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/c_t-shirt_men.png',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id :'3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/c_pant_girl.png',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        // _id :'4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/c_tunic-shirt_girl.png',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;