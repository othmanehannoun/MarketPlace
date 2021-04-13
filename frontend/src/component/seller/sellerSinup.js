import axios from 'axios'
import React from 'react'
import * as Yup from 'yup'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../css/seller-sinup.css'
import { Formik, Field, Form, ErrorMessage  } from "formik";

toast.configure()

function FormSinup (){

  const validationSchema = Yup.object({
    full_name: Yup.string().min(6, 'length must be at least 6 characters long').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Is not in correct format').min(10, 'Invalid phone number').required('Required'),
    address: Yup.string().min(6, 'Invalid address : length must be at least 6 characters long ').required('Required'),
  })

  const initialValues = {full_name : '', email: '', phone: '', address: ''}
  
  const onSubmit = (values) =>{
     console.log(values)
     axios.post(`http://localhost:4000/seller/register`, values)
     .then(res =>{
      toast.success('check your mail for validate your account')
     })
     .catch(err=>{
      toast.error('The email already exists')
     })

  }

      return(     
        <Formik
          initialValues = {initialValues}
          validationSchema = {validationSchema}
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
                          <Field type="text" name="full_name" className="form-control" placeholder="Full Name" />
                          <div style={{color: 'red'}}><ErrorMessage name="full_name"  /></div>
                        </div>
                        <div className="form-group">
                          <Field type="email" name="email" className="form-control" placeholder="Email Address" />
                          <div style={{color: 'red'}}><ErrorMessage name="email" /></div>
                        </div>
                        <div className="form-group">
                          <Field type="text" name="phone" className="form-control" placeholder="Phone Number" />
                          <div style={{color: 'red'}}><ErrorMessage name="phone"  /></div>
                        </div>
                       
                        <div className="form-group">
                          <Field type="text" name="address" className="form-control" placeholder="Address" />
                          <div style={{color: 'red'}}><ErrorMessage name="address"  /></div>
                        </div>
                        <div className="forgot">
                          {/* <a href="reset.html">Forgot password?</a> */}
                        </div>
                        <Field type="submit" className="button" value="Sin up" />
                      </Form>
                    </div>
                 
                  </div></div>
                   
        </Formik>
                
              );
        }
   



export default FormSinup