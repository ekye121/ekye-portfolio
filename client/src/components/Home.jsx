import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import scrolldown from '../../dist/lib/scrolldown.png';

const Home = (props) => {
  return (
    <div className="home">
      <h1>
        E D W A R D &nbsp;K Y E&nbsp;
      </h1>
      <h3>
        SOFTWARE ENGINEER
      </h3>
      <div>
        <AnchorLink href="#about">
          <img src={ scrolldown } className="viewAboutButton"/>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Home;
