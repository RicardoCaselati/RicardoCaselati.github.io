import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div
        className="row text-center justify-content-center"
        data-testid="missions"
      >
        <div className="col-10 col-md-10 d-flex flex-column align-items-center">
          <Title headline="Missões" />
          <div className="col-10 col-md-8 d-flex flex-wrap mb-5">
            { missions.map((item) => (<MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.image }
              country={ item.image }
              destination={ item.image }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
