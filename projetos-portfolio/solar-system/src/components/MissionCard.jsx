import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    console.log(this.props);
    return (
      
      <div
        className="col-12 col-md-3 d-flex flex-wrap align-items-center card m-2"
        data-testid="mission-card"
      >
        <p className="txt-content" data-testid="mission-name">{name}</p>
        <p className="txt-content" data-testid="mission-year">{year}</p>
        <p className="txt-content" data-testid="mission-country">{country}</p>
        <p className="txt-content" data-testid="mission-destination">{destination}</p>
      </div>
      
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
