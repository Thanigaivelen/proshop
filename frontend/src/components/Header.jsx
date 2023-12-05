import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Badge,Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'
import {  useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice'; 
import logo from '../assets/logo.png'
import { logout } from '../slices/authSlice';
import { UseSelector,useDispatch } from 'react-redux';

const Header = () => {
  const{cartItems}=useSelector((state)=>state.cart)
  const{userInfo}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [logoutApiCall]=useLogoutMutation()
  const logoutHandler=async()=>{
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
      
    } catch (err) {
      console.log(err)
      
    }
  }
    
  return (
    
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
                 <Container>
                  <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt="ProShop" />

                    ProShop
                    </Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                  <Nav.Link>
                    <FaShoppingCart />cart
                    {
                      cartItems.length>0 &&(
                      <Badge pill bg='success' style={{marginLeft:
                      '5px'}}>
                        {cartItems.reduce((a,c)=>a+c.qty,0)}

                      </Badge>
                      )
                    }
                  </Nav.Link>
                  </LinkContainer>
                  {userInfo?(
                    <NavDropdown title={userInfo.name} id='username'>

                     <LinkContainer to='/profile'>
                      <NavDropdown.Item>profile</NavDropdown.Item>

                     </LinkContainer>
                     <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                     </NavDropdown.Item>


                    </NavDropdown>

                  ):( <LinkContainer to='/login'>

                  <Nav.Link href='/login' ><FaUser />sign In
                  </Nav.Link> 
                 </LinkContainer>)}
                 {userInfo && userInfo.isAdmin &&(

                  <NavDropdown title='Admin' id='adminmenu'>

                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    </NavDropdown>

                 )}
                 
                 </Nav>  
                </Navbar.Collapse>
                </Container>


        </Navbar>
    
  )
}

export default Header