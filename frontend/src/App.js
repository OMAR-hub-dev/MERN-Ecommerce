
import './App.css';

import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App d-flex flex-column site-container">
      <header>
        <Navbar bg="warning" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Bondoufle store</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
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
