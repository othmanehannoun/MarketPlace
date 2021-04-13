import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import CartIcon from './CartIcon' 


function UserMenu (){
  const history = useHistory() 
      let user =JSON.parse(localStorage.getItem("user")) ;
      console.log(user)


      const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        history.push('/')
      
    }

      return(
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                  <Link to="/" className="navbar-brand" alt="logo"> 
                  <img src="images/logo.svg" width='10%'/> 
                  </Link>          
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                  
                    {  
                    !user ? 
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link to="" className="nav-link" to='/login'>LOGIN</Link>
                    </li>

                      :
                   
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          My Account
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{zIndex: '1000'}}>
                          <Link class="dropdown-item" href="#">PROFIL</Link>
                          <Link class="dropdown-item" href="#">HISTORY</Link>
                          <div class="dropdown-divider"></div>
                          <Link class="dropdown-item" href="#"
                            onClick = { () =>logout()}>
                              LOGOUT
                          </Link>
                        </div>
                      </li>

                    
                      
                    }
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" to='/cart'><CartIcon /></Link>
                      </li>
                      
                      {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" to="">CONTACT US</Link>
                      </li> */}
                      
                      {/* <li className="nav-item dropdown pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Profile 
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><Link className="dropdown-item" to="">you profil</Link></li>
                          <li><Link className="dropdown-item" to="" >logout</Link></li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>  
        </div>
        )
    
}

export default UserMenu