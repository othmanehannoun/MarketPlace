import React from 'react'
import {useHistory} from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import axios from 'axios'



function addPrt (){
    const history = useHistory()
    let id =JSON.parse(localStorage.getItem("seller")) ;
    const id_seller = id._id

    const initialValues = {name : '', price: '', description: '', countInStock: '', id_seller : id_seller}
  
    const onSubmit = (data) =>{
        console.log(data)
        axios.post(`http://localhost:4000/products/AddProduct`, data)

        .then(res =>{
         history.push('/seller-dashbord')
        })
        .catch(err=>{
       console.log(err.message)
        })

    }
     
    return(

        <Formik
        initialValues = {initialValues}
        onSubmit = {onSubmit}
      >
        
            <div className="mainContent">
                   <nav> </nav>

                    <div className="boxContent">
                     <div className="firstRow">
                      <div className="container">
                
                  <div className="login-form">
                    <div className="main-div" style={{marginTop :'3%', maxWidth:'50%'}}>
                      <div className="panel">
                        <h2 style={{marginBottom:'40px'}}>ADD PRODUCT</h2>

                      </div>
                      <Form id="Login">
                        <div className="form-group">
                          <Field type="text" name="name" className="form-control" placeholder="Product Name" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="price" className="form-control" placeholder="Product Price" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="description" className="form-control" placeholder="Description" />
                        </div>
                       
                        <div className="form-group">
                          <Field type="number" name="countInStock" className="form-control" placeholder="Quantity" />
                        </div>
                        <div className="form-group">
                          <Field type="file" name="image" className="form-control" />
                        </div>

                        <Field type="submit" className="btn btn-primary" value="Add" />
                     
                      </Form>
                    </div>
                 
                  </div>
                       
                      </div>
                    </div>
                    </div>
            </div>
            </Formik>
    )
}





export default addPrt
