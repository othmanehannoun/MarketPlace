import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import NavbarDashbord from '../NavbarDash'

function addPrt (props){
  
  let id =JSON.parse(localStorage.getItem("seller")) ;
  const id_seller = id._id
  console.log(id_seller)

    const history = useHistory()

    const [categorys, setCategorys] = useState([]);
    useEffect(() =>{
      const fetchDate = async () =>{
        await axios.get('http://localhost:4000/allcategory')
        .then(res=>{
          setCategorys(
            res.data.categorys
         )
        }).catch(err=>{console.log(err)})
      } 
      fetchDate();
      return () =>{
          
      }
    }, [])
    
    const [selectFile , setSelectFile] = useState(null)

    const [product, setProduct] = useState({
      name: "",
      catName:"",
      price: "",
      description: "",
      countInStock: "",
      id_seller : id_seller,
      img: ""
    })

    const handleChange = (e) => {
      setProduct({...product, [e.target.id]: e.target.value})
    }

    const onSubmitForm = async (e) => {
      e.preventDefault();

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      const formData = new FormData()
      formData.append("name", product.name)
      formData.append("catName", product.catName)
      formData.append("price", product.price)
      formData.append("description", product.description)
      formData.append("countInStock", product.countInStock)
      formData.append("id_seller", product.id_seller)
      formData.append("img", selectFile)

      await axios.post(`http://localhost:4000/products/AddProduct`, formData, config)
      .then(res =>{
        history.push('/Gestion-products')
        alert('product added')
      })
      .catch(err=>{
        console.log(err.message)
      })
    }

     
    return(
               <div className="mainContent">
                   <NavbarDashbord />

                    <div className="boxContent">
                     <div className="firstRow">
                      <div className="container">
                
                  <div className="login-form">
                    <div className="main-div" style={{marginTop :'3%', maxWidth:'50%'}}>
                      <div className="panel">
                        <h2 style={{marginBottom:'40px'}}>ADD PRODUCT</h2>

                      </div>
                      <form onSubmit={onSubmitForm}>
                        <div className="form-group">
                          <input type="text" name="name" id="name" onChange={handleChange} className="form-control" placeholder="Product Name" />
                        </div>
                        <div className="form-group">
                          <select name="catName" id="catName" onChange={handleChange} className="form-control">
                          {
                              categorys.map(cat=>(

                                <option value={cat._id} key={cat._id}>{cat.catName}</option>

                                ))
                          }
                            </select>
                        </div>
                        <div className="form-group">
                          <input type="text" name="price" id="price" onChange={handleChange} className="form-control" placeholder="Product Price" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="description" id="description" onChange={handleChange} className="form-control" placeholder="Description" />
                        </div>
                       
                        <div className="form-group">
                          <input type="number" name="countInStock" id="countInStock" onChange={handleChange} className="form-control" placeholder="Quantity" />
                        </div>
                        <div className="form-group">
                          <input type="file" name="img" id="img" onChange={(e) => setSelectFile(e.target.files[0])} className="form-control" />
                          {/* <input type="file" name="img" id="img" onChange={handleChange} className="form-control" /> */}
                        </div>

                        <input type="submit" className="button" value="Add" />

                        {/* { JSON.stringify(user) } */}
                     
                      </form>
                    </div>
                 
                  </div>
                       
                      </div>
                    </div>
                    </div>
            </div>
     
    )
}





export default addPrt
