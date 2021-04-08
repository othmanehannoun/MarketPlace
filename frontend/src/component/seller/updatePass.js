import axios from 'axios'
import React from 'react'
import { useHistory } from "react-router-dom";
import '../../css/seller-sinup.css'
import { Formik, Field, Form } from "formik";


function UpdatePass (){
    const history = useHistory()

  const initialValues = {old_password : '', newpassword: ''}
  
  const onSubmit = (values) =>{
     console.log(values)
     const token = localStorage.getItem('token')
     axios.patch(`http://localhost:4000/seller/update`, values, { headers: { 'auth-token': token } })
     .then(res =>{
        history.push('/seller/login')
     })
     .catch(err=>{
       alert('password incorrect check your email')
     })

  }

      return(     
        <Formik
          initialValues = {initialValues}
          onSubmit = {onSubmit}
        >

           <div className="container">
                  <h1 className="form-heading">login Form</h1>
                  <div className="login-form">
                    <div className="main-div">
                      <div className="panel">
                        <h2>SELLER SIN UP</h2>
                        <p>Please enter your personal information</p>
                      </div>
                      <Form id="Login">
                        <div className="form-group">
                          <Field type="text" name="old_password" className="form-control" placeholder="Old password" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="newpassword" className="form-control" placeholder="New Password" />
                        </div>
                        {/* <div className="form-group">
                          <Field type="text" name="phone" className="form-control" placeholder="Phone Number" />
                        </div> */}
                        
                        <Field type="submit" className="btn btn-primary" value="Change Password" />
                      </Form>
                    </div>
                 
                  </div></div>
                   
        </Formik>
                
              );
        }
   



export default UpdatePass