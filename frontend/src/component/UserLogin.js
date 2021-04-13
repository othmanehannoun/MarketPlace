import axios from 'axios'
import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../css/seller-sinup.css'

toast.configure()

function UserLogin (){

    const history = useHistory()

    const [email, setLogin] = useState();
    const [password, setPassword] = useState();



    const handleSubmit = (e) => {
		e.preventDefault();

	const user = {email,password};

	axios.post(`http://localhost:4000/user/login`, user)
		.then(res => {
      
          console.log(res.data.user)

          localStorage.setItem('user',JSON.stringify(res.data.user));
          localStorage.setItem('token', res.data.accesstoken);
          history.push(`/`)
        })
        .catch(err => {
         console.log(err.message)
         toast.error('Email or password Inccorect')
      })
    }



      return(     
       

           <div className="container">
                  <h1 className="form-heading">login Form</h1>
                  <div className="login-form">
                    <div className="main-div">
                      <div className="panel">
                        <h2>USER LOGIN</h2>
                        <p>Please enter your Correct information</p>
                      </div>
                      <form action="" id="Login" onSubmit={handleSubmit}>
                      <div className="form-group">
                          <input type="email" name="email" className="form-control" placeholder="Enter Your Address Email" 
                           required 
                           value={email} 
                           onChange={e => setLogin(e.target.value)}
                           />
                        </div>

                        <div className="form-group">
                          <input type="password" name="password" className="form-control" placeholder="Enter Your Password" 
                           value={password} 
                           onChange={e => setPassword(e.target.value)}
                           />
                        </div>
                       
                        <input type="submit" className="button" value="Login" 
                        style={{marginBottom: '20px'}}/>

                        <div className="link">
                          <a className="float-left" href="/register">REGISTER</a>
                          <a  className="float-right" href="/seller-login">SELLER LOGIN</a>
                        </div>
                      </form>
                    </div>
                 
                  </div></div>
                
              );
        }
   



export default UserLogin