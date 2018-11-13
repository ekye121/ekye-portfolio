import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = (props) => {
  return (
    <div className="about">
      <h1>
        E D W A R D . K Y E
      </h1>
      <div>
        SOFTWARE ENGINEER BASED IN NYC
      </div>
      <div>-</div>
      {/* <div>
        I love clean code and designs
      </div> */}
      <div>
        MERN/SERN STACK
      </div>
      <div className="viewWorkButton">
        <AnchorLink href="#work">
          VIEW WORK
        </AnchorLink>
      </div>
    </div>
  )
}

export default About;
