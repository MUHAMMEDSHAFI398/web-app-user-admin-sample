import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../axios';
import {useNavigate} from "react-router-dom"



function EditUser() {
    const details = useSelector(state=>state); 
    console.log(details)

    const initialVlaues = { name: details.data.name, email:details.data.email  };
    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});
    console.log(details);
    const onChangeHandle = (event) => {
    const { name, value } = event.target; 
    setFormValues({ ...formValues, [name]: value }); 
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post(`http://localhost:5000/admin/editUser/${details.data.id}`,{
        name: formValues.name,
        email: formValues.email,
    }).then((response)=>{
        navigate('/admin/home');
    }).catch((error)=>{
        setErrors(error.response.data);
    })
   
} 

  return (
    <div className="mt-5" >
            <div className="container border w-25" >
            <form className="mt-5" onSubmit={handleSubmit} >
            <h2 className='d-flex justify-content-center' >Edituser</h2>

                <div className="form-group mt-5">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={formValues.name}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.name}</p>}
                </div>
                <div className="form-group mt-5">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formValues.email}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.email}</p>}
                </div>
                

                <div className="form-group mb-3 mt-4 d-flex justify-content-center">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </div>

            </form>
            </div>
            
        </div>
  )
}

export default EditUser
