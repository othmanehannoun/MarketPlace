import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



function Product (){

  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const fetchDate = async () =>{
      await axios.get('http://localhost:4000/products/AllProducts')
      .then(res=>{
        setProducts(
         res.data.products
       )
      }).catch(err=>{console.log(err)})
    } 
    fetchDate();
    return () =>{
        
    }
  }, [])
        return(
            <div className="container">
                <h2 className="titre">Trending <b>Products</b></h2>
                <div className="row" id="product">

                {
                  products.map((product)=> {
                    return(
                      <div className="col-md-4" key={product._id}>
                      <Link to={'/productDetails/'+ product._id} className="productScreen" >
                      <div className="card rounded h-100">
                          <div className="card-image">
                              {/* <span className="card-notify-badge">{product.name}</span> */}
                              <span className="card-notify-year">-20%</span>
                              <img className="img-fluid" src={`images/${product.image}`} alt="" />
                          </div>
              
                          <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">{product.price}$</p>
                              
                          </div>    
                          </div>
                      </Link>
                   </div>
                    )
                  }

                    
               
                

                    
                    )
                }
      
            </div>
          </div>
        )
      }

export default Product