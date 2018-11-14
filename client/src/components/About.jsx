import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = (props) => {
  return (
    <div className="about">
      <h1>
        E D W A R D &nbsp;K Y E 
      </h1>
      <h3>
        SOFTWARE ENGINEER
      </h3>
      {/* <div>-</div> */}
      {/* <div>
        I love clean code and designs
      </div> */}
      <div>

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
