import React, { useEffect, useState } from 'react';
import './update.css';
import axios from "axios"
import { Link, useParams ,useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const Update = () => {

const users = {
  firstName:"",
  lastName:"",
  email:""
}

const {id} = useParams();
const navigate = useNavigate();
const [user , setUser] = useState(users);

const handleChange = (event)=>{
  const {name,value} = event.target;
  setUser({...user,[name]:value});
  console.log(user);
}
useEffect(()=>{
  axios.get(`http://localhost:8000/api/getone/${id}`)
  .then((res)=>{
    setUser(res.data);

  }).catch((error)=>console.log(error))
},[id]);

const submitForm = async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:8000/api/update/${id}`, user)
  .then((response)=>{
     toast.success(response.data.msg, {position:"top-right"})
     navigate("/")
  })
  .catch(error => console.log(error))
}

  return (
    <div className='update'>
        <Link to="/" className='link'>Back</Link>
        <h3 className='heading'>Update User</h3>
        <form className="formArea" onSubmit={submitForm}>
        <div className="loginForm">
          <label >First Name</label>
          <input type="text" placeholder="First Name" className="firstName" name='firstName' value={user.firstName} onChange={handleChange} autoComplete='off'/>
        </div>

        
        <div className="loginForm">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" className="lastName" name='lastName' value={user.lastName} onChange={handleChange} autoComplete='off'/>
        </div>

        <div className="loginForm">
          <label>Email</label>
          <input type="email" placeholder="Email" className="email" name='email' value={user.email} onChange={handleChange} autoComplete='off'/>
        </div>


       
        <div className="loginForm" >
        <button type="submit"  className="subButton" >Update User</button>
        </div>
      </form>
    </div>
  )
}

export default Update