import Menu from "../component/Menu";
import Fcategory from '../component/fCategory'
import React from 'react'


function fetchByCategory() {
  return (

         <div className="container">
              <Menu />   
           <Fcategory />
         </div>
  );
}

export default fetchByCategory;