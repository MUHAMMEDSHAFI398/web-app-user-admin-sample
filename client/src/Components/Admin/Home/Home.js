import React, { useState, useEffect } from 'react';
import axios from '../../../axios';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../State/index';


function Home() {
    const [users, setUsers] = useState([]);
    const [search, setsearch] = useState("");
    const [filteredDocs, setFilteredDocs] = useState([]);
    const navigate = useNavigate();

    const details = useSelector(state=>state); 
    console.log(details);
  const dispatch = useDispatch();
  const {addData,removeToken} = bindActionCreators(actionCreaters,dispatch);

      

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
    const handleDelete = (id) => {
        console.log(id);
        axios.get(`http://localhost:5000/admin/deleteUser/${id}`).then((reaponse) => {
            console.log(reaponse);
            axios.get('http://localhost:5000/admin/getUsers').then((response) => {
                console.log(response.data);
                if (response.data.status) {
                    setUsers(response.data.Users);
    
                } else {
                    console.log(response);
                }
            })
            
        })
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setsearch(event.target.value);
        if (event.target.value !== "") {
          const newPacientes = users.filter((value) =>
            value.name.toLowerCase().includes(event.target.value.toLowerCase())
          );
          console.log(newPacientes);
          setFilteredDocs(newPacientes);
        }
      };

      const handleLogout = ()=>{
        const data = {
          token:"",
          id:""
        }
        removeToken(data);
        navigate('/admin');
      }
      

    return (
        <div class="table-responsive container">
            <div className='d-flex justify-content-between'>

            <Link to='/admin/adduser'>
            <a className='btn btn-success'>
                Adduser
            </a>
            </Link>
            <a onClick={handleLogout} className='btn btn-primary'>Logout</a>

                
            </div>
           
            <div className="d-flex justify-content-end align-items-end pt-4">
                <div className="search_div">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    />
                </div>

            </div>
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
                    { search === "" &&  users.map((obj) => {
                        return (
                            <tr>

                                <td>{obj._id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>
                                    <a onClick={() => handleDelete(obj._id)} className='btn btn-danger'>Delete</a>

                                </td>


                            </tr>
                        )
                    })}
                      { search !== "" &&  filteredDocs.map((obj) => {
                        return (
                            <tr>

                                <td>{obj._id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>
                                    <a onClick={() => handleDelete(obj._id)} className='btn btn-danger'>Delete</a>

                                </td>


                            </tr>
                        )
                    })}

                </tbody>
                
            </table>
            {filteredDocs.length === 0 && search !== "" && (
          <div>
            <h1 className='d-flex justify-content-center align-item-center'>No result</h1>
          </div>
        )}

        </div>
    )
}

export default Home
