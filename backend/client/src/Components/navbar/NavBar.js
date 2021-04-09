import React from 'react'
import {Link} from 'react-router-dom'
import{Navbar,Nav,Form}from 'react-bootstrap'
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/actions/user'

// import logo from "../../assets/logo.png"


const NavBar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.userReducer.isAuth)
    const user = useSelector((state) => state.userReducer.user)

    
    return (
        <div>

  {/* // nv navbar */}
  <Navbar bg="dark" expand="lg" variant="dark" >
  {/* <Navbar.Brand href="#home"> <img src={logo} alt="wams" className="logo" /> </Navbar.Brand> */}
  <Navbar.Brand href="#home"> WAM's </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Link to="/"className="Btn">
              <Nav href="/">Home</Nav>
        </Link>
        <Link to="/profile" className="Btn">
              <Nav href="/">Profil</Nav>
        </Link>


       { user && user.role ===1 ?
       <Link to="/admin" className="Btn">
              <Nav href="/">Admin</Nav>
        </Link>
        :
        null
        }
    
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
    <Nav className="mr-auto ">
        

         { isAuth?(
              <Link to="/" className="Btn">
                 <Nav href="/" onClick={()=>dispatch(logout() )} >LogOut</Nav>
             </Link>)
            :
            (
                <div className="sign">
                    <Link to="/signin" className="Btn">
                        <Nav href="/">Sign In</Nav>
                    </Link>
                    <Link to="/signup" className="Btn">
                        <Nav href="/" >Sign Up</Nav>
                    </Link>
                </div>
            )

        }
       
         
    </Nav>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
    )
}

export default NavBar
