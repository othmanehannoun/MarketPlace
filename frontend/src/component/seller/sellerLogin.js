import axios from 'axios'
import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import '../../css/seller-sinup.css'


function FormLogin (){

    const history = useHistory()

    const [email, setLogin] = useState();
    const [password, setPassword] = useState();



    const handleSubmit = (e) => {
		e.preventDefault();

	const Seller = {email,password};

	axios.post(`http://localhost:4000/seller/login`, Seller)
		.then(res => {
        if(res.data.message == 'Your account is still being processed'){

            alert('Your account is still being processed')

        }else if(res.data.message == 'email or password incorrect') {
          alert('email or password incorrect')
        }

        else{

          console.log(res.data.seller)

          localStorage.setItem('seller',JSON.stringify(res.data.seller));
          localStorage.setItem('token', res.data.accesstoken);
          
          history.push(`/seller-dashbord`)
        }
        })
        .catch(err => {
         
      })
    }



      return(     
       

           <div className="container">
                  <h1 className="form-heading">login Form</h1>
                  <div className="login-form">
                    <div className="main-div">
                      <div className="panel">
                        <h2>SELLER LOGIN</h2>
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
                       
                        <input type="submit" className="btn btn-primary" value="Login" />
                      </form>
                    </div>
                 
                  </div></div>
                
              );
        }
   



export default FormLogin