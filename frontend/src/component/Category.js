import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Category extends Component{
    render(){
        return(
          <div className="col-md-4 ">
          <div className="list-group ">
               <span className="list-group-item list-group-item-action active">Ferch by Category</span>
               <Link to="#" className="list-group-item list-group-item-action">User Management</Link>
               <Link to="#" className="list-group-item list-group-item-action">Used</Link>
               <Link to="#" className="list-group-item list-group-item-action">Enquiry</Link>
               <Link to="#" className="list-group-item list-group-item-action">Dealer</Link>
               <Link to="#" className="list-group-item list-group-item-action">Media</Link>
               <Link to="#" className="list-group-item list-group-item-action">Post</Link>
               <Link to="#" className="list-group-item list-group-item-action">Category</Link>
               <Link to="#" class="list-group-item list-group-item-action">Dealer</Link>
               <Link to="#" class="list-group-item list-group-item-action">Media</Link>
             
            
             </div> 
     </div>
        )
    }
}



export default Category