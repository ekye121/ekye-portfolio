import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import dynamics from 'dynamics.js';
import rallyCards from '../../dist/lib/rallyCards.png';
import startupCards from '../../dist/lib/startupCards.png';
import studyCards from '../../dist/lib/studyCards.png';


const Work = (props) => {
  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  return (
    <div className="work">
      <Grid>
        <Row className="show-grid">
          <Col xs={ 12 } md={ 12 } className="workMargin">
            <img src={ rallyCards } className="resize"/>
            <h1>
              RALLY
            </h1>
            <div>
              <p>Tech Stack: React, Apollo, Node, Express, GraphQL, Sequelize, PostgreSQL</p>
              <p>
                Rally is a tennis matchmaking application that utilizes an algorithm based on elo scoring that is as reliable as it is innovative. Our database of New York-area tennis courts allows for the scheduling of matches against skill-appropriate players on both hard-surface and clay courts for players of all levels of experience.
              </p>
              <a href="http://bit.ly/rally-me" target="_blank">
                View Site
              </a>
            </div>
          </Col>
          <Col xs={ 12 } md={ 12 } className="workMargin">
            <img src={ startupCards } className="resize"/>
            <h1>
              STARTup
            </h1>
            <div>
              <p>Tech Stack: React, Node, Express, Mongoose, MongoDB</p>
              <p>
                STARTup is a social website that allows users to find the best learning materials for all things tech. Users can find and add a rating for tech languages, specific content, bootcamps, etc. 
              </p>
              <a href="http://bit.ly/start-up-now" target="_blank">
                View Site
              </a>
            </div>
          </Col>
          <Col xs={ 12 } md={ 12 } className="lastWorkSection">
            <img src={ studyCards } className="resize"/>
            <h1>
              STUD(y)
            </h1>
            <div>
              <p>Tech Stack: React, Node, Express, MySQL</p>
              <p>
                STUD(y) is an application that allows users to find optimal study locations in close proximity to them. By leveraging crowdsourced user ratings for local cafes, STUD(y) users can indicate their preferences, and STUD(y) will return results that are tailored to that specific user.
              </p>
              <a href="http://bit.ly/stud-y" target="_blank">
                View Site
              </a>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Work;

/*

      <IsometricGrid
        shadow
        transform="rotateX(45deg) rotateZ(45deg)"
        stackItemsAnimation={{
          properties: function(pos) {
            return {
              translateZ: (pos + 1) * 30,
              rotateZ: getRandomInt(-4, 4),
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 500,
              points: [
                { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
              ],
              delay: (itemstotal - pos - 1) * 40,
            };
          },
        }}
        style={{ height: '800px', width: '900px' }}
        // style={{ height: '900px', width: '600px' }}
      >
        <Cell
          layers={[
            'https://picsum.photos/600/600/?random',
            '#9972fc',
            '#c322a3'
          ]}
        />
        <Cell
          layers={[
            'https://picsum.photos/200/300/?random',
            '#9972fc',
            '#c322a3'
          ]}
        />
        <Cell
          layers={[
            'https://picsum.photos/400/300/?random',
            '#9972fc',
            '#c322a3'
          ]}
        />
      </IsometricGrid>

*/