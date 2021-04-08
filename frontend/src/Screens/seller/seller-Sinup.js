import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../../component/Menu'
import FormSinup from '../../component/seller/sellerSinup'


function sellerSinup (){
      return(
        <div className="container">
             <Menu />
             <FormSinup />
          </div>
        )
    
}

export default sellerSinup