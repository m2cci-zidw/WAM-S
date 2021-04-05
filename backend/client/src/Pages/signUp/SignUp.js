import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
// import { register, videErrors } from "../../JS/actions/user";
import {Link}from 'react-router-dom'
import { register, videErrors } from "../../JS/actions/user";
import Errors from "../../Components/Errors";

import './SignUP.css'

const SignUp = ({history}) => {
  const [user, setuser] = useState({});
  const errors = useSelector ((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors ());
    };
  }, [dispatch]);
    return (
        <div>
            <div className="content-signUp">
            
              <div className="main-signUp">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <Link to="/signin">
            <label htmlFor="chk" aria-hidden="true">Sign In</label>
            </Link>
            <input type="text" name="name" 
            placeholder="User name" required 
            onChange={handleChange}
            />
            <input type="email" name="email"
             placeholder="Email" required 
             onChange={handleChange}
             />
            <input type="password" name="password" 
            placeholder="Password" required 
            onChange={handleChange}
            />
            <button
            onClick={(e) => { e.preventDefault(); dispatch( register (user, history))}}
            >Sign up</button>
          </form>
          {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        </div>
       
      </div>
        
      
        </div>
        </div>
    )
}

export default SignUp
