import React from 'react';
import Header from '../components/Header';
import LoadingPage from '../components/LoadingPage';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Card from '../components/Card';

class Search extends React.Component {
  state = {
    buttonDisabled: true,
    fieldSearch: '',
    loading: false,
    album: [],
    updateAlbumOk: true,
    showMessage: false,
    clearInput: false,
  }

  handleChange = (event) => {
    const fieldSearchLength = event.target.value.length;
    const minName = 2;
    if (fieldSearchLength >= minName) {
      this.setState({
        buttonDisabled: false,
        fieldSearch: event.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        fieldSearch: event.target.value,
      });
    }
  }

  handleClick = async () => {
    const { fieldSearch } = this.state;
    this.setState({ loading: true, clearInput: true });
    const response = await searchAlbumsAPI(fieldSearch);
    if (response.length === 0) {
      this.setState({
        updateAlbumOk: false,
      });
    }
    this.setState({
      loading: false,
      album: response,
      showMessage: true,
    });
  }

  render() {
    const {
      buttonDisabled,
      fieldSearch,
      loading,
      album,
      updateAlbumOk,
      showMessage,
      clearInput,
    } = this.state;

    const messageFieldWrong = (
      <p>
        Nenhum álbum foi encontrado
      </p>
    );

    const messageFieldOk = (
      <p>
        Resultado de álbuns de:
        {' '}
        { fieldSearch }
      </p>
    );

    const form = (
      <form>
        <input
          value={ clearInput ? '' : fieldSearch }
          data-testid="search-artist-input"
          name="fieldSearch"
          type="text"
          onChange={ this.handleChange }
          placeholder="Nome do Artista"
        />
        <button
          type="submit"
          disabled={ buttonDisabled }
          data-testid="search-artist-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
      </form>
    );

    const albuns = (
      <div>
        {album.map((eachAlbum, index) => (
          <Card
            inputField={ fieldSearch }
            key={ index }
            cardCollectionName={ eachAlbum.collectionName }
            cardArtistName={ eachAlbum.artistName }
            cardImage={ eachAlbum.artworkUrl100 }
            albumId={ eachAlbum.collectionId }
          />))}
      </div>
    );

    const gridAlbuns = (
      <section>
        { showMessage ? messageFieldOk : null }
        { albuns }
      </section>
    );

    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        { loading ? <LoadingPage /> : form }

        {/* {album.map((eachAlbum, index) => (
          <div key={ index }>
            <img src={ eachAlbum.artworkUrl100 } alt={ eachAlbum.artistName } />
            <span>{ eachAlbum.collectionName }</span>
            <span>{ eachAlbum.artistName }</span>
          </div>
        ))} */}

        { updateAlbumOk ? gridAlbuns : messageFieldWrong }

      </div>
    );
  }
}

export default Search;
