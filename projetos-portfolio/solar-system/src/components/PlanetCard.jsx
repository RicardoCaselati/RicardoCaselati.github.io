import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <div
          className="col-6 col-md-12 align-items-center mx-auto"
        >
          <img
            className="planetsImage"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
          <p className ="text-center txt-content"data-testid="planet-name">{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired, // propType para img é string https://spectrum.chat/react/general/proptype-for-image~7b8d284d-525d-46ab-a6ff-b8cb99a3cc79
};

export default PlanetCard;
