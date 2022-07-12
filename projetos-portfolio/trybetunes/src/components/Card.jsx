import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class CardAlbum extends React.Component {
  render() {
    const {
      index,
      cardCollectionName,
      cardArtistName,
      cardImage,
      albumId,
    } = this.props;

    return (
      <div key={ index }>
        <img src={ cardImage } alt={ cardArtistName } />
        <h3>{ cardCollectionName }</h3>
        <span>{ cardArtistName }</span>
        <Link
          to={ `/album/${albumId}` }
          data-testid={ `link-to-album-${albumId}` }
          id={ albumId }
          artistName={ cardArtistName }
          collectionName={ cardCollectionName }
        >
          vER aLBUM
        </Link>
      </div>
    );
  }
}

CardAlbum.propTypes = {
  albumId: PropTypes.string,
  cardCollectionName: PropTypes.string,
  cardArtistName: PropTypes.string,
  cardImage: PropTypes.string,
}.isRequired;

export default CardAlbum;
