import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Admin (){

    const [admins, setAdmins] = useState([]);
    useEffect(() =>{
      const fetchDate = async () =>{
        await axios.get('http://localhost:4000/admin/getadmin')
        .then(res=>{
            setAdmins(
                res.data.admin
         )
        }).catch(err=>{console.log(err)})
      } 
      fetchDate();
      return () =>{
          
      }
    }, [])

    return(
        
            <div className="mainContent">
                   <nav> </nav>

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
                            admins.map((admin)=>{
                                return(
                                    
                                <tr>
                                    <td>2</td>
                                    <td>{admin.full_name}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.phone}</td>
                                    <td>{admin.address} </td>
                                    <td class="text-center"><a class='btn btn-danger btn-xa' href="#">
                                        <span class="glyphicon glyphicon-edit"></span>
                                        delete
                                        </a>
                                    </td>
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





export default Admin
