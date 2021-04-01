import React from 'react'
import {Link} from 'react-router-dom'
import{Navbar,Nav,Form}from 'react-bootstrap'
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">WAM'S</Navbar.Brand>
    <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Profil</Nav.Link>
          <Nav.Link href="#pricing">test</Nav.Link>
    </Nav>
    
    <Form inline>
    <Nav className="mr-auto">
          <Link to="/signin">
              <Nav.Link href="#features">Sign In</Nav.Link>
          </Link>
          <Link to="/signup">
              <Nav.Link href="#home" >Sign Up</Nav.Link>
          </Link>
    </Nav>
    </Form>
  

       
   
  </Navbar>
            
        </div>
    )
}

export default NavBar
