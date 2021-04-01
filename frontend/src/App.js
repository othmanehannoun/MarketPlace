import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './css/App.css';
import Home from './Screens/HomePage'
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import store from './redux/Store'
import {Provider} from 'react-redux'


function App() {
  return (
    
      
      <BrowserRouter>
        <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path = "/productDetails/:id" exact component={ProductDetails}></Route>
            <Route path ="/cart" exact component={Cart} ></Route>
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


