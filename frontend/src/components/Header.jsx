import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png'


const Header = () => {
    // return (
    //     <div>
    //         fjfj
    //     </div>
    // )
  return (
    
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
                 <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} alt="ProShop" />

                    ProShop
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                  <Nav.Link href='/cart'><FaShoppingCart />cart</Nav.Link> 
                  <Nav.Link href='/login'><FaUser />sign In</Nav.Link> 
                 </Nav>  
                </Navbar.Collapse>
                </Container>


        </Navbar>
    
  )
}

export default Header