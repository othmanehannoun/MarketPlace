import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import NavbarDashbord from '../NavbarDash'



function GestSeller (){
   const history = useHistory()

    const [sellers, setSellers] = useState([]);
    useEffect(() =>{
      const fetchDate = async () =>{
        await axios.get('http://localhost:4000/seller/getAllSeller')
        .then(res=>{
            setSellers(
                res.data.seller
         )
        }).catch(err=>{console.log(err)})
      } 
      fetchDate();
      return () =>{
          
      }
     
    }, [])

 
    const acceptSeller = id  =>{
      axios.patch('http://localhost:4000/seller/valid/' + id)
        .then(res=>{
          history.push('/superAdmin/GstSeller')
          alert('Seller validate ')
          
          
      }).catch(err => console.log(err))

  }

    return(
        
            <div className="mainContent">
                   <NavbarDashbord />

                    <div className="boxContent">
                     <div className="firstRow">
                      <div className="container"> 
                      <table class="table table-striped " style={{width: '88%'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>full name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>address</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        {
                            sellers.map((seller)=>{
                                return(
                                    
                                <tr>
                                    <td>2</td>
                                    <td>{seller.full_name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.phone}</td>
                                    <td>{seller.address} </td>
                                    

                                  {
                                    
                                    seller.isValid == false ? 
                                    <td class="text-center"><button 
                                    onClick={() => refusedSeller()} class='btn btn-danger btn-xs mr-2' href="">
                                       Refused
                                       </button>
                                    
                                    <button onClick={() => acceptSeller(seller._id)} class='btn btn-success btn-xs' href="#">
                                        Accept
                                        </button>
                                    </td>
                                    :
                                    <td  class="text-center"><i class="fas fa-check"></i></td>
                                
                                  }
                                    </tr>
                                
                                )
                            })
                        }
                           
                            </table>
                            </div>
                        </div>
                        </div>
                        </div>
    )
}





export default GestSeller
