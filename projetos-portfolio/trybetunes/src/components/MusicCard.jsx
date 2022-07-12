import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import LoadingPage from './LoadingPage';

class MusicCard extends React.Component {
  state = {
    checked: false,
    loading: false,
    trackSaveList: [],
  }

  componentDidMount = () => {
    const { trackSaveList } = this.state;
    const { trackId } = this.props;
    this.setState({
      checked: trackSaveList.some((favoriteMusic) => favoriteMusic.trackId === trackId),
    });
    this.rescueFavoriteTrack();
  }

  componentDidMount = async () => {
    this.rescueFavoriteTrack();
  }

  rescueFavoriteTrack = async () => {
    const { track } = this.props;
    const response = await getFavoriteSongs();
    const listSongs = response.some((song) => song.trackId === track.trackId);
    if (listSongs) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  addSongFunction = async () => {
    this.setState({ loading: true });
    const { track } = this.props;
    await addSong(track);
    this.setState({ loading: false });
  }

  handleClick = (event) => {
    const { checked } = this.state;
    const { target } = event;
    const { value } = target;
    if (checked === false) {
      this.setState((prevState) => ({
        trackSaveList: [...prevState.trackSaveList, value],
        checked: true,
      }));
      this.addSongFunction();
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    const {
      trackName,
      previewUrl,
      trackId,
    } = this.props;

    const { checked, loading } = this.state;

    return (
      <div>
        { loading && <LoadingPage /> }
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {['']}
          <code>audio</code>
        </audio>
        <label htmlFor="favorite">
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="favorite"
            checked={ checked }
            onChange={ this.handleClick }
            value={ trackId }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  checked: PropTypes.bool,
}.isRequired;

export default MusicCard;
