import React, { useState, useEffect } from 'react';
import axios from '../../../axios';
import { Link } from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/getUsers').then((response) => {
            console.log(response.data);
            if (response.data.status) {
                setUsers(response.data.Users);

            } else {
                console.log(response);
            }
        })
    }, [])
    const handleDelete =(id)=>{
        console.log(id);
        axios.get(`http://localhost:5000/admin/deleteUser/${id}`).then((reaponse)=>{
            console.log(reaponse);
        })
    }
   
    return (
        <div class="table-responsive container">
            <a className='btn btn-success'>
                <Link  to='/admin/adduser'>Adduser</Link>
            </a>
            <table class="table table-success table-striped mt-5" id="table">
                <thead>
                    
                        <tr>
                            <th scope="col">User id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Controlls</th>

                        </tr>
                    
                </thead>
                <tbody>
                {users.map((obj) => {
                    return( 
                    <tr>

                        <td>{obj._id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>
                            <a onClick={()=>handleDelete(obj._id)} className='btn btn-danger'>Delete</a>
                            
                        </td>
                        

                    </tr>
                    )
                })}

                </tbody>
            </table>

        </div>
    )
}

export default Home
