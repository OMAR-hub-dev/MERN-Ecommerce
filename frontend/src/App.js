
import './App.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import {Store} from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';

function App() {
  const {state,dispatch: ctxDispatch } = useContext(Store);
  const {cart,userInfo } = state;

  const signoutHandler = () =>{
    ctxDispatch ({type: 'USER_SIGNOUT'});
    localStorage.removeItem ('userInfo');
    localStorage.removeItem ('shippingAddress');
    localStorage.removeItem ('paymentMethod');
  }

  return (
    <BrowserRouter>
    <div className="App d-flex flex-column site-container">
    <ToastContainer position ='bottom-center' limit={1}/>
      <header>
        <Navbar bg="warning" variant="dark">
          <Container >
            <LinkContainer to="/">
              <Navbar.Brand>Bondoufle store</Navbar.Brand>
            </LinkContainer>
            <Nav className='me-auto'>
                <Link to ='/cart' className='nav-link'>
                  Cart
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.reduce((a,c)=> a+ c.quantity, 0)}
                        </Badge>
                      )}
                </Link>
                {userInfo?(
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                )
                :(<Link className="nav-link" to="/signin">
                  Sign In
                  </Link>)}
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main className='mt-4'>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/Signin" element={<SigninScreen/>}/>
          <Route path="/Signup" element={<SignupScreen/>}/>
          <Route path="/shipping" element={<ShippingAddressScreen/>}/>
          <Route path="/payment" element={<PaymentMethodScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
                 
      </main>
      <footer>
        <div className='text-center'> ALL Rights Reserverd </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
