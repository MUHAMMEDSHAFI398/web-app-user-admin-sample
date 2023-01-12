import React, { useState } from 'react'
import axios from '../../axios';
import {useNavigate} from "react-router-dom";

function Login() {
    const initialVlaues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});


    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/login',{
            email: formValues.email,
            password: formValues.password,
        }).then((response)=>{
            console.log(response.data);
            navigate('/');
        }).catch((error)=>{
            console.log(error.response.data); 
            setErrors(error.response.data);
            console.log(errors);
        })
    }
    return (
        <div className="mt-5" >
            <div className="container border w-25" >
                <form onSubmit={handleSubmit}>
                    <h2 className='d-flex justify-content-center' >Login</h2>
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
                    <div className="form-group mt-5">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            value={formValues.password}
                            onChange={onChangeHandle}
                        />
                        {errors && <p style={{color:"red"}}>{errors.password}</p>}
                    </div>
                    <div className="form-group  mb-3 mt-4 d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Login