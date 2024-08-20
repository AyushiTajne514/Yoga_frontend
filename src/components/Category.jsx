import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Category() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Category</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Other Nav Links */}
          <NavDropdown title="Diseases" id="basic-nav-dropdown">
            <NavDropdown.Item href="#disease1">Disease 1</NavDropdown.Item>
            <NavDropdown.Item href="#disease2">Disease 2</NavDropdown.Item>
            <NavDropdown.Item href="#disease3">Disease 3</NavDropdown.Item>
            <NavDropdown.Item href="#disease4">Disease 4</NavDropdown.Item>
            <NavDropdown.Item href="#disease5">Disease 5</NavDropdown.Item>
            <NavDropdown.Item href="#disease6">Disease 6</NavDropdown.Item>
            <NavDropdown.Item href="#disease7">Disease 7</NavDropdown.Item>
            <NavDropdown.Item href="#disease8">Disease 8</NavDropdown.Item>
            <NavDropdown.Item href="#disease9">Disease 9</NavDropdown.Item>
            <NavDropdown.Item href="#disease10">Disease 10</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Category;
