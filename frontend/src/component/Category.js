import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



function Category (props){

  const [categorys, setCategorys] = useState([]);
  useEffect(() =>{
    const fetchDate = async () =>{
      await axios.get('http://localhost:4000/allcategory')
      .then(res=>{
        setCategorys(
          res.data.categorys
       )
      }).catch(err=>{console.log(err)})
    } 
    fetchDate();
    return () =>{
        
    }
  }, [])

  let handlClick = async(id)=>{
   
  }
   
        return(
          <div className="col-md-4 ">
          <div className="list-group ">
               <span className="list-group-item list-group-item-action active">Ferch by Category</span>
              {
                 categorys.map((category)=>{
                  return(
                   <Link to={'/products/'+category._id} className="list-group-item list-group-item-action">{category.catName}</Link>
                  )
                })
              }
             
             </div> 
           
     </div>
     
        )
   
}



export default Category