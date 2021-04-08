import React from 'react'
import Menu from '../../component/seller/MenuSeller'
import GestionProducts from '../../component/seller/Products'


function sellerDashbord (){
      return(
        <div className="">
             <Menu />
             <GestionProducts />
          </div>
        )
    
}

export default sellerDashbord