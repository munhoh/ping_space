import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import styles from './NavBar.module.css';
import companyLogo from './resource/PingSpaceLogo.png';
// import { left } from '@popperjs/core';

const pages = [
  'Micro-fulfillment',
  'Robotics Warehouse',
  'About Us',
  "Let's Talk",
];
const subpages = ['Grocery', 'E-Commerce'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const BootstrapButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 40px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   backgroundColor: '#234CE9',
//   borderColor: '#0063cc',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: '#0069d9',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//     color: 'white',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// });

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClass = `dropdown-menu${isOpen ? ' show' : ''}`;

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={companyLogo} style={{ width: '60%' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-end align-items-center"
        >
          <Navbar.Text>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', alignItems: 'center' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Micro-fulfillment</Nav.Link>
              <Nav.Link href="#action2">Robotic Warehouse</Nav.Link>
              <Nav.Link href="#action3">About Us</Nav.Link>
              <Nav.Link href="#action3">
                <Button>Let's Talk</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;
