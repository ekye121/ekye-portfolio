import React from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div className="nav">
      <a className="navItem" href="#about">ABOUT</a>
      <a className="navItem" href="#apps">APPS</a>
      <a className="navItem" href="#contact">CONTACT</a>
      {/* <Navbar inverse staticTop>
        <Nav>
          <NavDropdown title="+" id="basic-nav-dropdown">
            <MenuItem id="1" href="#about">ABOUT</MenuItem>
            <MenuItem id="2" href="#apps">APPS</MenuItem>
            <MenuItem id="3" href="#contact">CONTACT</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar> */}
    </div>
  )
}

export default NavBar;

{/* <div className="section" id="1">
  Section 1
</div>
<div className="section" id="2">
  Section 2
</div>
<div className="section" id="3">
  Section 3
</div> */}