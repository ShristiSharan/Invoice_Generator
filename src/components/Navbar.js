import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {


  return (
    <Navbar expand="lg">
      <Container fluid>
      
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
 <Link to="/">
            <Button variant="outline-danger" >All Invoices</Button>
            </Link>

          <Link to="/add">
            <Button variant="outline-success" >Add Invoice</Button>
            </Link>

          {/* <Link to="/">
<Button variant="outline-success" >Add Invoice</Button></Link>
          <Link to="/add">
            <Button variant="primary">
              Go To Cart 
            </Button>
          </Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
