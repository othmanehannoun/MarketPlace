import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Menu from '../component/Menu';
import { addToCart } from "../redux/action/CartAction";
import { useDispatch } from "react-redux";

// import {addToCart} from "../Store/action/CartAction";
// import {connect} from "react-redux";




function ProductDetails({match},props){

    const dispatch = useDispatch();
    const history = useHistory()

    const [product, setProduct] = useState([]);
    const [qty, setQty] = useState(1)
    const {id} = match.params

    useEffect(() =>{  
           axios.get(`http://localhost:4000/products/product/${id}`)
          .then(res=>{
            setProduct(
                res.data
           )
          }).catch(err=>{console.log(err)})
       
        return () =>{
            
        }
      })

      const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        // console.log(product._id)
        history.push(`/cart`);
      };

    //   console.log(res.data)
        return(
           
            <div className="container">
                <Menu />
                 <h2 className="titre">Product <b>Details</b></h2>

                 {
                    <div className="row mt-4">
                    <div className="col-lg-4 text-center border-right border-secondery">
                        <div className="tab-content row h-100 d-flex justify-content-center align-items-center" id="myTabContent">
                            <div className="tab-pane fade show active col-lg-12" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <img className="img-fluid" src={`../images/${product.image}`} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h2 style={{marginBottom:'50px'}}>
                            {product.name}
                        </h2>
                        
                        <div className="">
                            <h4 style={{color:'#f2d900'}}>Description</h4>
                            <p>{product.description}</p>
                        </div>

                        <table>
                            <tr>
                                <td><label className="for" >Price: </label></td>
                                <td> <span className="infoProduct">{product.price}$</span></td>
                            </tr>
                            <tr>
                                <td><label className="for" >Status: </label></td>
                                <td> <span className="infoProduct">{product.countInStock>0 ? "onStock" : "out of stock"}</span></td>
                            </tr>
                            <tr>
                                <td> <label className="for" >Quntité: </label></td>
                                <td>
                                    <select classNmae="form-select" value={qty} onChange={(e) => {setQty(e.target.value)}} >
                                        {[...Array(product.countInStock).keys()].map(x=>
                                            <option value={x+1} multiple>{x+1}</option>
                                            )}
                                       
                                    </select>
                                </td>
                            </tr>
                        </table>

                        {product.countInStock > 0 && <button onClick={() => addToCartHandler()} className="add-to-card">
                                           Add to cart
                                            </button>
                        }
                    </div>
                </div>
               
              }     
                    </div>

        )
    }



    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    //     };
    // }
    
    // export default connect(null, mapDispatchToProps)(ProductDetails);

    export default ProductDetails
