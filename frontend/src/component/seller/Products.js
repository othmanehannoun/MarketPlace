import React, { useEffect, useState } from 'react'
import axios from 'axios'



function GestionProducts (){

    const [sellerProducts, setsellerProducts] = useState([]);
    useEffect(() =>{
      const fetchDate = async () =>{
        let id = JSON.parse(localStorage.getItem("seller")) ;
        const id_seller = id._id
        
        await axios.get('http://localhost:4000/products/sellerProducts/' + id_seller)
        .then(res=>{
            setsellerProducts(
                res.data.product
         )
        }).catch(err=>{console.log(err)})
      } 
      fetchDate();
      return () =>{
          
      }
    }, [])

    return(
        
            <div className="mainContent">
                   <nav> </nav>

                    <div className="boxContent">
                     <div className="firstRow">
                      <div className="container"> 

                      <table className="table table-striped " style={{width: '95%'}}>
                        <thead>
                            <tr>
                                <th >Image</th>
                                <th >Product name</th>
                                <th >description</th>
                                <th >price</th>
                                <th >quantity</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                 
                                    
                              {
                                  sellerProducts.map(product=>{
                                      return(
                                        <tr>
                                        <td><img src="images/1.jpg" width="100vh" alt=""/></td>
                                        <td >{product.name}</td>
                                        <td >{product.description}</td>
                                        <td >{product.price}$</td>
                                        <td >{product.countInStock}</td>
                                        <td className="text-center">
                                        <a  className='btn-xs mr-2' href="#">
                                        <i  class="fas fa-trash-alt" style={{color:'red'}}></i>
                                        </a>
                                        <a className='btn-xs mr-2' href="#">
                                        <i class="fas fa-edit"></i>
                                        </a>
                                    
                                        </td>
                                        </tr>
                                      )
                                  })
                              }
                                
                       
                           
                            </table>
   
                      </div>
                    </div>
                    </div>
            </div>
    )
}





export default GestionProducts
