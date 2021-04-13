import React, { useEffect, useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'



function Fcategory (props){

  const [products, setProducts] = useState([]);
  const {idcat} = useParams()
       console.log(idcat);
       
  useEffect(() =>{  
    
    const fetchDate = async () =>{
      await axios.get(`http://localhost:4000/products/productName/${idcat}`)
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
                <h2 className="titre">search result</h2>
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
                              <img height='250px' width='100%' src={product.img} alt="" />
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

export default Fcategory