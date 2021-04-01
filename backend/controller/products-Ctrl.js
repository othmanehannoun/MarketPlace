const Products = require('../models/model-products')

// --------- Add Product---------//
const AddProduct = (req, res) =>{
    const Product = new Products({
        name: req.body.name,
        price: req.body.price,
        description : req.body.description,
        countInStock : req.body.countInStock,
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
// const fetchProductById =  (req,res)=>{
//     Products.findById(req.params.id).then(product=>{
//       res.json({product})
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
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
    AddProduct, AllProducts, getProductById
}