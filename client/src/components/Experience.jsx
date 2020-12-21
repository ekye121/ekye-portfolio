import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import scrolldown from '../../dist/lib/scrolldown.png';

const renderExperience = (exp, e) => {
  let experiences = document.querySelector('.experiences').childNodes;
  let timeline = document.querySelector('.timeline').childNodes;
  let scrollToWork = document.querySelector('.scroll-to-work');
  let clickedExp;

  experiences.forEach(experience => {
    if (exp && experience.classList.contains(exp)) {
      clickedExp = document.querySelector(`.${exp}`);
      setTimeout(() => {
        if (clickedExp) {
          clickedExp.style.opacity = '1';
          if (clickedExp.getBoundingClientRect().height > 200)
          scrollToWork.style.top = `${clickedExp.getBoundingClientRect().height + 5}px`;
        }
      }, 50);
    } else {
      experience.style.opacity = '0';
    }
  });


  timeline.forEach(tl => {
    tl.childNodes[0].classList.remove('active');
  });

  if (e.target) {
    e.target.classList.add('active');
  }
};

const Experience = (props) => {
  return (
    <div className="experience-container">
      <Grid>
        <Row className="show-grid">
          <Col xs={ 12 } md={ 6 }>
            <div className="alignRight timeline">
              <h3>
                <span
                  className="experience-timeline active"
                  onClick={ (e) => renderExperience('pubnative', e) }
                >
                  February 2020 - Current
                </span>
              </h3>
              <h3>
                <span
                  className="experience-timeline"
                  onClick={ (e) => renderExperience('verve', e) }
                >
                  January 2019 - January 2020
                </span>
              </h3>
            </div>
          </Col>
          <Col xs={ 12 } md={ 4 }>
            <div className="experiences">
              <div className="pubnative experiences-description active">
                <h3>Software Engineer @ PubNative</h3>
                <p>
                  Mobile publisher platform and programmatic ad exchange.
                </p>
              </div>
              <div className="verve experiences-description">
                <h3>Software Engineer @ Verve</h3>
                <p>
                  Location-powered mobile marketing platform that connects advertisers with consumers.
                </p>
              </div>
            </div>
            <br/>
            <div className="scroll-to-work">
              <span>View My Work</span>
              <AnchorLink href="#work" className="anchor-link-work">
                <img src={ scrolldown } className="scroll-button"/>
              </AnchorLink>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Experience;
