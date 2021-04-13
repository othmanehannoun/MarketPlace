import React, { Component } from 'react';
import {Link} from 'react-router-dom';





class Menu extends Component{
    render(){
        return(
      
            <div className="sideBarre">
            <div className="sideBarre__logo">
                  <h2 className="navbar-brand">MarketPlace</h2>
            </div>
            <div className="sideBarre__menu">
                  <ul>
                      <li><i class="fas fa-user-shield"></i> <Link className="navbar-brand" to="/superAdmin">Gestion Admin</Link></li>
                      <li><i class="fas fa-address-card"></i> <Link className="navbar-brand" to="/superAdmin/GstSeller">Gestion Seller</Link></li>
                      <li><i class="fas fa-plus"></i> <Link className="navbar-brand" to="/superAdmin/Add-New-Admin">Add Admin</Link></li>
                      <li><i class="fas fa-sign-out-alt"></i> <Link className="navbar-brand" to="/">Logout</Link></li>
                  </ul>
            </div>
      </div>

        )
    }
}


export default Menu ;