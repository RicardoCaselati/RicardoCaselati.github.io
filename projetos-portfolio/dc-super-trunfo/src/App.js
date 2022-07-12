import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deckOfCards: [
    {
      cardName:'Batman',
      cardDescription:'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
      cardAttr1: '48',
      cardAttr2: '63',
      cardAttr3: '85',
      cardImage:'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg',
      cardRare: 'RARO',
      cardTrunfo:false,
    },
    {
      cardName:'Batman',
      cardDescription:'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
      cardAttr1: '48',
      cardAttr2: '63',
      cardAttr3: '85',
      cardImage:'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg',
      cardRare: 'RARO',
      cardTrunfo:false,
    },
    {
      cardName:'Batman',
      cardDescription:'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
      cardAttr1: '48',
      cardAttr2: '63',
      cardAttr3: '85',
      cardImage:'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg',
      cardRare: 'RARO',
      cardTrunfo:false,
    },
    {
      cardName:'Batman',
      cardDescription:'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
      cardAttr1: '48',
      cardAttr2: '63',
      cardAttr3: '85',
      cardImage:'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg',
      cardRare: 'RARO',
      cardTrunfo:false,
    },
  ],
  };

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxValueEachAttr = 90;
    const maxSumAttr = 210;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if ((cardName.length
    && cardDescription.length
    && cardImage.length
    && cardRare.length !== 0)
    && Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0

    && Number(cardAttr1) <= maxValueEachAttr
    && Number(cardAttr2) <= maxValueEachAttr
    && Number(cardAttr3) <= maxValueEachAttr

    && (sumAttr <= maxSumAttr)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  }

  onInputChange = ({ target: { value, name, type, checked } }) => {
    this.setState({ [name]: type === 'checkbox' ? checked : value }, this.buttonDisabled);
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      deckOfCards: [...prevState.deckOfCards, newObject],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.trunfoVerified((prevState) => [...prevState.deckOfCards]));
  };

  trunfoVerified = () => {
    const { deckOfCards } = this.state;
    if (deckOfCards.filter((item) => item.cardTrunfo === true).length > 0) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  excludeButton = (card) => {
    const { deckOfCards } = this.state;
    const index = deckOfCards.findIndex((cardOfDeck) => cardOfDeck === card);

    deckOfCards.splice(index, 1);

    this.setState({ deckOfCards }, () => this.trunfoVerified());
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      deckOfCards,
    } = this.state;

    return (
      <div className="conteiner pt-4 bg">
        <h1 className="text-center">DC Super Trunfo</h1>
          <section className="row g-0 justify-content-center mx-auto pt-5">
            <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center">
              <div className="col-md-5 d-flex justify-content-end mb-3">
                <Form
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                  hasTrunfo={ hasTrunfo }
                  isSaveButtonDisabled={ isSaveButtonDisabled }
                  onInputChange={ this.onInputChange }
                  onSaveButtonClick={ this.onSaveButtonClick }
                />
              </div>
              <div className="col-md-5 gx-5">
                <Card
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                />
              </div>
            </div>
          </section>

          <section className="container-fluid pt-5">
            <h2 className="text-center mb-4 mt-5">Este é o seu Deck!</h2>
            <div className="row justify-content-center">
                {deckOfCards.map((card) => (
                  <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex flex-column justify-content-center" key={ card.cardName }>
                    <Card
                      key={ card.cardName }
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ card.cardImage }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.excludeButton(card) }
                      Style="width:100px"
                      className="mt-2 btn btn-danger"
                    >
                      Excluir
                    </button>
                  </div>
                ))}
            </div>
          </section>
      </div>
    );
  }
}

export default App;
