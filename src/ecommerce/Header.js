import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import { Link } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file


function Header({ counter }) {
  return (
    <Navbar expand="lg" className="bg-custom">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-custom">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link className="nav-link-custom">About</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto search-form-custom">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input-custom"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-button-custom">Search</Button>
          </Form>
          <div className="icons-custom">
            <Link to='/cart' className="icon-link-custom">
              <FaCartPlus className="icon-custom" />
              <span className="counter-custom">{counter}</span>
            </Link>
            <FaHeart className="icon-custom" style={{color:'white'}} />
            <MdManageAccounts className="icon-custom" style={{color:'white',fontSize:'34px'}}/>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
