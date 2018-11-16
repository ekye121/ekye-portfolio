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
              I'm a Software Engineer based in NYC. I have built software applications from ideation to deployment in team settings and on my own. I'm always thinking about the bigger picture and the small details that go into coding an application - UI/UX, scalability, efficiency, clean code/code reusability. What I love most about coding/technology is that the more I learn the more interested I get.
            </p>
            <p>
              I'm all about self-improvement to become a better coder and meeting like-minded people.
            </p>
            <div>
              A few technologies I'm experienced with:
            </div>
            <div className="techFont">
              JavaScript, React, Node, Express, MongoDB, MySQL
            </div>
            <br/>
            View My Work
            <AnchorLink href="#work">
              {/* <Button className="viewWorkButton">
                View My Work
              </Button> */}
              <img src={ scrolldown } className="viewWorkButton"/>
            </AnchorLink>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default About;
