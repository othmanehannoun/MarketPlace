import React from 'react';
import '../../css/dashbord.css'
import Menu from '../../component/superAdmin/MenuDashbord';
import GestSeller from '../../component/superAdmin/table-seller'


function DashbordAdmin(){

  
        return(
      
            <div class="">
              <Menu />
              <GestSeller />
            </div>

        )
    }


export default DashbordAdmin ;