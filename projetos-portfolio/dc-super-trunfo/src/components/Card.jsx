import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

class CardTrybe extends React.Component {
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
    } = this.props;

    return (
      <div>
        <Card sx={ {maxWidth:300, width: 300, height:620 } }>
          <CardHeader title= { cardName } data-testid="name-card" gutterBottom variant="h5" component="div">
          </CardHeader>
          <CardMedia
            component="img"
            height="194"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <CardContent>
            <Typography
            className="mb-3"
            data-testid="description-card"
            variant="body2"
            color="text.secondary"
            >
              { cardDescription }
            </Typography>
            <div className="d-flex align-items-center mb-1">
              <div className="col-5">Força</div>
              <div className="progress col-5">
                <div
                  data-testid="attr1-card"
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={ cardAttr1 }
                  Style={ `width:${cardAttr1}%` }
                  aria-valuemin="0"
                  aria-valuemax="90">{ cardAttr1 }%</div>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1">
              <div className="col-5">Agilidade</div>
              <div className="progress col-5">
                <div
                  data-testid="attr2-card"
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={ cardAttr2 }
                  Style={ `width:${ cardAttr2 }%` }
                  aria-valuemin="0"
                  aria-valuemax="90">{ cardAttr2 }%</div>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1">
              <div className="col-5">Inteligência</div>
              <div className="progress col-5">
                <div
                  data-testid="attr3-card"
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={ cardAttr3 }
                  Style={ `width:${ cardAttr3 }%` }
                  aria-valuemin="0"
                  aria-valuemax="90">{ cardAttr3 }%</div>
              </div>
            </div>
         

          <div className="mt-3"data-testid="rare-card">{ cardRare }</div>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null }


          </CardContent>
          

        </Card>
      </div>
    );
  }
}

CardTrybe.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onDeck: PropTypes.bool,
  deckOfCards: PropTypes.object,
}.isRequired;

export default CardTrybe;
