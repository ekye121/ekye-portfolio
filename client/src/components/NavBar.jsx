import React from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <Navbar inverse staticTop>
        <Nav>
          <NavDropdown eventKey={3} title="+" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} id="1" href="#about">ABOUT</MenuItem>
            <MenuItem eventKey={3.2} id="2" href="#apps">APPS</MenuItem>
            <MenuItem eventKey={3.3} id="3" href="#contact">CONTACT</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;