import React from "react";
import { Container ,Navbar, Nav, Button, Form, Collapse  } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';






const Header = () => {

    return (
    <>

<Navbar expand="lg" dark bg="dark" mb="3">
<Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">
            <Navbar.Nav mr="auto" mx="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Products</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
              <Nav.ItemLink href="#">Contact us</Nav.ItemLink>
            </Navbar.Nav>
          <div className="Buttons">
          <Button primary outline mr="1">
          <i className="fas fa-sign-in-alt" style={{marginRight:"5px"}}></i>
            Login
          </Button>
          <Button primary outline mr="1">
          <i className="fas fa-user-plus" style={{marginRight:"5px"}}></i>
            Sign up</Button>
          <Button primary outline mr="1">
          <i className="fas fa-cart-plus" style={{marginRight:"5px"}}></i>
            Cart (0)</Button>
          </div>
          </Collapse>
          </Container>
        </Navbar>
    </>
    );
};

export default Header;