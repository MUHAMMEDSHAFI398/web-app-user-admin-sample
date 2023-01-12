import React,{useState,useEffect} from 'react';
import axios from '../../axios';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';



function Signup() {
    const initialVlaues = { name: "", email: "", password: "", confirmPassword: "" };
    const [formValues, setFormValues] = useState(initialVlaues);
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();
    const auth = useSelector(state=>state); 

    const onChangeHandle = (e) => {
       
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const handleSubmit = (event)=>{
        event.preventDefault();

        axios.post('http://localhost:5000/signup',{
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            password_confirm: formValues.confirmPassword 
        }).then((response)=>{
            console.log(response.data);
            navigate('/');
        }).catch((error)=>{
            console.log(error.response.data);
            setErrors(error.response.data);
          
        })
        
    }
    useEffect(()=>{
        console.log(auth);
        console.log(auth.token);
        console.log(auth.token.token);
        if(auth.token.token !== ''){
            navigate('/');
        }

    },[])
   

    return (
       
        <div className="mt-5" >
            <div className="container border w-25" >
            <form className="mt-5" onSubmit={handleSubmit} >
            <h2 className='d-flex justify-content-center' >Signup</h2>

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
                <div className="form-group  mt-5">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={onChangeHandle}
                    />
                     {errors && <p style={{color:"red"}}>{errors.password_confirm}</p>}
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

export default Signup
