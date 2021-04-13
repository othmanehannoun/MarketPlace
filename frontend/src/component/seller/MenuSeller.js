import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';





function  Menu (){

    const history = useHistory()

    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("seller");
        history.push('/seller-login')
      
    }

        return(
      
            <div className="sideBarre">
            <div className="sideBarre__logo">
                  <h2 className="navbar-brand">MarketPlace</h2>
            </div>
            <div className="sideBarre__menu">
                  <ul>
                      <li><i class="fas fa-industry"></i> <Link className="navbar-brand" to="/seller-dashbord">Statistics</Link></li>
                      <li><i class="fas fa-tasks"></i> <Link className="navbar-brand" to="/Gestion-products">Gestion Products</Link></li>
                      <li><i class="fas fa-plus"></i> <Link className="navbar-brand" to="/addProduct">Add Product</Link></li>
                      <li>
                          <i class="fas fa-sign-out-alt"></i>
                          <Link className="navbar-brand"
                            onClick={() => logout()}
                          >
                            Logout
                          </Link>
                      </li>
                  </ul>
            </div>
      </div>

        )
 
}


export default Menu ;