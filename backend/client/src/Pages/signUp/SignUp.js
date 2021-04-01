import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { register, videErrors } from "../../JS/actions/user";

import '../signIn/SignIn.css'
import {Link}from 'react-router-dom'

const SignUp = ({history}) => {
  const [user, setuser] = useState({});
  // const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, [dispatch]);
    return (
        <div>
            <div className="SignInUp">
              <div className="main">  	
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
            onClick={() => dispatch(register(user, history))}
            >Sign up</button>
          </form>
        </div>
       
      </div>
        
      
        </div>
        </div>
    )
}

export default SignUp
