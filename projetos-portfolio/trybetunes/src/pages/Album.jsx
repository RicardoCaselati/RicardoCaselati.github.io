import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

class Album extends React.Component {
  state = {
    info: {},
    trackList: [],
  };

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    const infArtist = response[0];
    this.setState({
      trackList: response,
      info: infArtist,
    });
  };

  render() {
    const { info, trackList } = this.state;
    const { artistName, collectionName, artworkUrl100 } = info;

    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
        <div>
          <img alt={ collectionName } src={ artworkUrl100 } />
          <h2 data-testid="artist-name">{ artistName }</h2>
          <h3 data-testid="album-name">{ collectionName }</h3>
        </div>
        {
          trackList.filter(
            (track) => track.kind === 'song',
          ).map((track, id) => (
            <MusicCard
              previewUrl={ track.previewUrl }
              trackName={ track.trackName }
              key={ id }
              trackId={ track.trackId }
              track={ track }
            />
          ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.number,
  collectionName: PropTypes.string,
  artistName: PropTypes.string,
}.isRequired;

export default Album;
