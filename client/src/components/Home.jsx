import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import scrolldown from '../../dist/lib/scrolldown.png';

const Home = (props) => {
  return (
    <div className="home">
      <h1 className="name">
        E D W A R D &nbsp;K Y E&nbsp;
      </h1>
      <h3>
        SOFTWARE ENGINEER
      </h3>
      <AnchorLink href="#about" className="anchor-link-about">
        <img src={ scrolldown } className="scroll-button"/>
      </AnchorLink>
    </div>
  )
}

export default Home;
