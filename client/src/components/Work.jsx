import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import dynamics from 'dynamics.js';
import rallyCards from '../../dist/lib/rallyCards.png';
// import rallyCards from '../rallyCards.png';

const Work = (props) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="work">
      <Grid>
        <Row className="show-grid">
          <Col xs={ 12 } md={ 12 }>
            <img src={ rallyCards } className="resize"/>
            <h1>
              RALLY
            </h1>
            <div>
              Tennis matchmaking application 
              <p>
            </div>
          </Col>
          <Col xs={ 12 } md={ 12 }>
            <img src={ rallyCards } className="resize"/>
          </Col>
          <Col xs={ 12 } md={ 12 }>
            <img src={ rallyCards } className="resize"/>
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