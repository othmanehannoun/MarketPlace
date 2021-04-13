import React from 'react'
import {useHistory} from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import axios from 'axios'
import NavbarDashbord from '../NavbarDash'



function NewAdmin (){
    const history = useHistory()
   

    const initialValues = {full_name : '', email: '', phone: '', address: '', password : ''}
  
    const onSubmit = (data) =>{
        console.log(data)
        axios.post(`http://localhost:4000/admin/AdminRegister`, data)

        .then(res =>{
         history.push('/superAdmin')
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
                   <NavbarDashbord />

                    <div className="boxContent">
                     <div className="firstRow">
                      <div className="container">
                
                  <div className="login-form">
                    <div className="main-div" style={{marginTop :'3%', maxWidth:'50%'}}>
                      <div className="panel">
                        <h2 style={{marginBottom:'40px'}}>Add New Admin</h2>

                      </div>
                      <Form id="Login">
                        <div className="form-group">
                          <Field type="text" name="full_name" className="form-control" placeholder=" Full Name" />
                        </div>
                        <div className="form-group">
                          <Field type="email" name="email" className="form-control" placeholder="Address Email" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="phone" className="form-control" placeholder="Phone Number" />
                        </div>
                       
                        <div className="form-group">
                          <Field type="text" name="address" className="form-control" placeholder="Address" />
                        </div>
                        <div className="form-group">
                          <Field type="password" name="password" className="form-control" placeholder="Password"/>
                        </div>

                        <Field type="submit" className="btn btn-primary" value="Add New admin " />
                     
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





export default NewAdmin
