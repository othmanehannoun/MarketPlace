import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './css/App.css';

// Redux Routes
import store from './redux/Store'
import {Provider} from 'react-redux'

// user Routes
import Home from './Screens/HomePage'
import ProductDetails from './Screens/ProductDetails';
import fetchByCategory from './Screens/fetchCategory'
import Cart from './Screens/Cart';
import UserLogin from './Screens/Login'

// Super Admin Routes
import GestionAdmin from './Screens/superAdmin/GstAdmin'
import GestionSeller from './Screens/superAdmin/GtsSeller'
import AddNewAdmin from './Screens/superAdmin/AddAdmin';

// Seller Routes
import sellerSinup from './Screens/seller/seller-Sinup'
import sellerlogin from './Screens/seller/seller-login'
import updatePass  from './Screens/update-pass'
import GstProducts from './Screens/seller/GstProducts'
import sallerDashbord from './Screens/seller/seller-dashbord'
import AddProduct from './Screens/seller/AddProduct'





function App() {
  return (
    
        <BrowserRouter>
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/productDetails/:id" exact component={ProductDetails} /> 
            <Route path = "/products/:idcat" exact component={fetchByCategory} /> 
            <Route path = "/cart" exact component={Cart} />
            <Route path = "/login" exact component={UserLogin} />

            <Route path = "/superAdmin" exact component={GestionAdmin}/>
            <Route path = "/superAdmin/GstSeller" exact component={GestionSeller} />
            <Route path = "/superAdmin/Add-New-Admin" exact component={AddNewAdmin} />



            <Route path = "/seller-sinup" exact component={sellerSinup}/>
            <Route path = "/seller-login" exact component={sellerlogin}/>
            <Route path = "/seller/update-password" exact component={updatePass} />
            <Route path = "/seller-dashbord" exact component={sallerDashbord} />
            <Route path = "/Gestion-products" exact component={GstProducts} />
            <Route path = "/AddProduct" exact component={AddProduct} />


            

           
        </Switch>
    
           
  
      
      </BrowserRouter>
    


  );
}

function AppWithStore(){
  return(
     <Provider store={store}>
       <App />
     </Provider>
  )
}
export default AppWithStore;


