const Products = require('../models/model-products')
const jwt = require('jsonwebtoken')

// --------- Add Product---------//
const AddProduct = (req, res) =>{
 
  
    const Product = new Products({

        name: req.body.name,
        price: req.body.price,
        description : req.body.description,
        countInStock : req.body.countInStock,
        id_seller : req.body.id_seller,
        img : req.body.img
    })
    Product.save()
    .then(data=>{res.send(data)})
    .catch(err=>{console.log(err)})
}

// --------- fetch All Products---------//
const AllProducts = (req, res)=>{
    
      Products.find((err, products)=>{
          if(err || !products){
              return res.json({error: 'No data'})
          }
          res.json({products})
      })
}


// --------- fetch Product by ID ---------//
const fetchProductById =  async (req,res)=>{
    //  const token = req.header('auth-token')
    //  const id_seller = jwt.verify(token,process.env.ACCESS_TOKEN_SELLER)._id
    let id = req.params.id_seller;
    await Products.find({id_seller:id }).then(product=>{
      res.json({product})
    }).catch(err=>{
      console.log(err);
    })
  }

const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};




module.exports = {
    AddProduct, AllProducts, getProductById, fetchProductById
}