import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../State/index';


function Home() {
  const auth = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { removeToken } = bindActionCreators(actionCreaters, dispatch);


  const handleLogout = () => {
    const data = {
      token: auth.token,
      id: auth.id
    }
    console.log(data);
    removeToken(data);
    navigate('/login');
  }

  useEffect(() => {
    console.log(auth);
    if (auth.token.token === '') {
      navigate('/login');
    }
  }, [])

  return (
    <div>
      <p>this is home page</p>
      <a onClick={handleLogout} className='btn btn-secondary' >Logout</a>
    </div>
  )
}

export default Home
