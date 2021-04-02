import React from 'react'
import {Link} from 'react-router-dom'
import{Navbar,Nav,Form}from 'react-bootstrap'
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/actions/user'
const NavBar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.userReducer.isAuth)
    
    return (
        <div>

            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">WAM'S</Navbar.Brand>
    <Nav className="mr-auto">
        <Link to="/">
              <Nav href="/">Home</Nav>
        </Link>
        <Link to="/profile">
              <Nav href="/">Profil</Nav>
        </Link>
          
          <Nav href="/">test</Nav>
    </Nav>
    
    <Form inline>

    <Nav className="mr-auto">
         { isAuth?(
              <Link to="/">
                 <Nav href="/" onClick={()=>dispatch(logout() )} >LogOut</Nav>
             </Link>)
            :
            (
                <div>
                    <Link to="/signin">
                        <Nav href="/">Sign In</Nav>
                    </Link>
                    <Link to="/signup">
                        <Nav href="/" >Sign Up</Nav>
                    </Link>
                </div>
            )

        }
         
    </Nav>
    </Form>
  

       
   
  </Navbar>
            
        </div>
    )
}

export default NavBar
