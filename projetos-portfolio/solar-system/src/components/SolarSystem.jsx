import React from 'react';
import planet from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        className="row text-center justify-content-center"
        data-testid="solar-system"
      >
        <div className="col-6 col-md-8">
          <Title headline="Planetas" />
          <div className="d-flex flex-wrap flex-md-nowrap">
            {planet.map((item) => (<PlanetCard
              key={ item.name }
              planetImage={ item.image }
              planetName={ item.name }
            />))}
          </div>
        </div>
      </div>
    );
  }
}
export default SolarSystem;
