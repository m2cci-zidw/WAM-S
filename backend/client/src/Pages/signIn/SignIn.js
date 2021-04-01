import React from 'react'
import './SignIn.css'



const SignIn = () => {

    return (
        <div className="SignInUp">
              <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form>
            
            <label htmlFor="chk" aria-hidden="true" >Lorem</label>
            
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button>Login1</button>

            
          </form>
        </div>
      </div>
        
        
        
      
        </div>
    )
    
}

export default SignIn
