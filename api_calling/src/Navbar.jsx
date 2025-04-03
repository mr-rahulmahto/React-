import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Covid_api from './Covid_api';
import Apicall from './Apicall';
import Menu from './Menu';

export default function Navebar(){
    return (
     <>
    <Router>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Home">API CALLING</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/"className="text-yellow-500">Home</Link></Nav.Link>
            <Nav.Link href="#About"><Link to="/About"className="text-yellow-500">About</Link></Nav.Link>
            <Nav.Link href="#Covid_api"><Link to="/Covid_api"className="text-yellow-500">Covid</Link></Nav.Link>
            <Nav.Link href="#Apicall"><Link to="/Apicall"className="text-yellow-500">Apicalling</Link></Nav.Link>
            <Nav.Link href="#Menu"><Link to="/Menu"className="text-yellow-500">Menu</Link></Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
        
        <Routes>
		      <Route path="/" element={<Home/>}/>
		      <Route path="/About" element={<About/>}/>
          <Route path="/Covid_api" element={<Covid_api/>}/>
          <Route path="/Apicall" element={<Apicall/>}/>
          <Route path="/Menu" element={<Menu/>}/>
		      
	      </Routes>
    </Router>   
      </>
    )
}