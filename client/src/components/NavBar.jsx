import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = (props) => {
  return (
    <div className="nav">
      {/* <AnchorLink href="#home" className="navItem">HOME</AnchorLink> */}
      <AnchorLink href="#about" className="navItem">ABOUT</AnchorLink>
      <AnchorLink href="#experience" className="navItem">EXPERIENCE</AnchorLink>
      <AnchorLink href="#work" className="navItem">WORK</AnchorLink>
      <AnchorLink href="#contact" className="navItem">CONTACT</AnchorLink>
    </div>
  )
}

export default NavBar;
