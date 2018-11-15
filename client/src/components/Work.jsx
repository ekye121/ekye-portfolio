import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import rallyCards from '../../dist/lib/rallyCards.png';
import startupCards from '../../dist/lib/startupCards.png';
import studyCards from '../../dist/lib/studyCards.png';

const Work = (props) => {
  return (
    <div className="work">
      <h1 className="workMargin">
        Things I've Built
        {/* THINGS I'VE BUILT */}
      </h1>
      <Grid>
        <Row className="show-grid">
          <Col xs={ 12 } md={ 12 } className="workMargin">
            <img src={ rallyCards } className="resize"/>
            <h1>
              RALLY
            </h1>
            <div>
              <p className="techFont">
                React &nbsp;/&nbsp; Apollo &nbsp;/&nbsp; Node &nbsp;/&nbsp; Express &nbsp;/&nbsp; GraphQL &nbsp;/&nbsp; Sequelize &nbsp;/&nbsp; PostgreSQL &nbsp;/&nbsp; AWS
              </p>
              <p>
                Rally is a tennis matchmaking application that utilizes an algorithm based on elo scoring that is as reliable as it is innovative. Our database of New York-area tennis courts allows for the scheduling of matches against skill-appropriate players on both hard-surface and clay courts for players of all levels of experience.
              </p>
              <Button href="http://bit.ly/rally-me" target="_blank" className="viewSiteButtons">
                View Site
              </Button>
            </div>
          </Col>
        {/* </Row> */}

        {/* <Row className="show-grid"> */}
          <Col xs={ 12 } md={ 12 } className="workMargin">
            <img src={ startupCards } className="resize"/>
            <h1>
              STARTup
            </h1>
            <div>
              <p className="techFont">
                React &nbsp;/&nbsp; Node &nbsp;/&nbsp; Express &nbsp;/&nbsp; Mongoose &nbsp;/&nbsp; MongoDB &nbsp;/&nbsp; Heroku
              </p>
              <p>
                STARTup is a crowdsouced, social website that allows users to find the best learning materials for all things tech. Users are able to add ratings for tech languages, specific content, and bootcamps. Users can also find the most current top tech news.
              </p>
              <Button href="http://bit.ly/start-up-now" target="_blank" className="viewSiteButtons">
                View Site
              </Button>
            </div>
          </Col>
        {/* </Row> */}

        {/* <Row className="show-grid"> */}
          <Col xs={ 12 } md={ 12 } className="lastWorkSection">
            <img src={ studyCards } className="resize"/>
            <h1>
              STUD(y)
            </h1>
            <div>
              <p className="techFont">
                React &nbsp;/&nbsp; Node &nbsp;/&nbsp; Express &nbsp;/&nbsp; MySQL &nbsp;/&nbsp; Heroku
              </p>
              <p>
                STUD(y) is an application that allows users to find optimal study locations in close proximity to them. By leveraging crowdsourced user ratings for local cafes, users can indicate their preferences, and STUD(y) will return results that are tailored to that specific user.
              </p>
              <Button href="http://bit.ly/stud-y" target="_blank" className="viewSiteButtons">
                View Site
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Work;
