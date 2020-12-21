import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import scrolldown from '../../dist/lib/scrolldown.png';

const About = (props) => {
  return (
    <div className="about">
      <Grid>
        <Row className="show-grid">
          <Col xs={ 12 } md={ 6 }>
            <div className="alignRight">
              <h1>HEY THERE,</h1>
              <h1>I'M ED.</h1>
            </div>
          </Col>
          <Col xs={ 12 } md={ 4 }>
            <p>
              I'm a Software Engineer based in NYC. I have built software applications from ideation to deployment in team settings and on my own. I'm always thinking about the bigger picture and the small details when I'm solving problems and coding applications (UI/UX, scalability, efficiency, clean code, code reusability). I enjoy collaborating with like-minded people and believe having an open line of communication is key to building a successful product.
            </p>
            <p>
              The more I learn, solve problems, and build apps, the more interest I gain in coding.
            </p>
            <div>
              A few technologies I'm experienced with:
            </div>
            <div className="techFont">
              JavaScript, React, Node, Express, MongoDB, MySQL
            </div>
            <br/>
            <span>See where I work</span>
            <AnchorLink href="#experience" className="anchor-link-exp">
              <img src={ scrolldown } className="scroll-button"/>
            </AnchorLink>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default About;
