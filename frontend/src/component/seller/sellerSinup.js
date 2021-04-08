import axios from 'axios'
import React from 'react'
import '../../css/seller-sinup.css'
import { Formik, Field, Form } from "formik";


function FormSinup (){

  const initialValues = {full_name : '', email: '', phone: '', address: ''}
  
  const onSubmit = (values) =>{
     console.log(values)
     axios.post(`http://localhost:4000/seller/register`, values)
     .then(res =>{
       alert('check your mail for validate your account')
     })
     .catch(err=>{
       alert('The email already exists')
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
                          <Field type="name" name="full_name" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                          <Field type="email" name="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="phone" className="form-control" placeholder="Phone Number" />
                        </div>
                        {/* <div className="form-group">
                          <Field type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div> */}
                        <div className="form-group">
                          <Field type="text" name="address" className="form-control" placeholder="Address" />
                        </div>
                        <div className="forgot">
                          {/* <a href="reset.html">Forgot password?</a> */}
                        </div>
                        <Field type="submit" className="btn btn-primary" value="Sin up" />
                      </Form>
                    </div>
                 
                  </div></div>
                   
        </Formik>
                
              );
        }
   



export default FormSinup