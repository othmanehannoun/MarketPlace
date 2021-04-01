var express = require('express');
var router = express.Router();

const {AddProduct, getProductById, AllProducts} = require('../controller/products-Ctrl');



// -------- Add Product ----------//
router.post('/AddProduct', AddProduct)

// -------- fetch All Products ----------//
router.get('/AllProducts', AllProducts)

// -------- fetch Product by ID----------//
router.get('/product/:id', getProductById)




module.exports = router;