import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    const label = { inputProps: { 'aria-label': 'Super Trunfo' } };
    const checkboxDefault = (

      <FormControlLabel control={
          <Checkbox
            defaultChecked
            name="cardTrunfo"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />}
        label="Super Trunfo"
      />
    );
    const message = <p>Você já tem um Super Trunfo em seu baralho</p>;

    return (
      <div className='container'>
        <div className='d-flex flex-column  justify-content-between"'>
          <TextField
            id="outlined-search"
            label="Nome da Carta"
            type="text"
            name="cardName"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
            className="mb-3"
          />
          
          <TextField
            id="outlined-multiline-flexible"
            label="Descrição da Carta"
            multiline
            maxRows={4}
            name="cardDescription"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
            className="mb-3"
          />

          <TextField
            id="outlined-number"
            label="Primeiro Atributo"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="mb-3"
            name="cardAttr1"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />

           <TextField
            id="outlined-number"
            label="Segundo Atributo"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="mb-3"
            name="cardAttr2"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />

          <TextField
            id="outlined-number"
            label="Terceiro Atributo"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            className="mb-3"
            name="cardAttr3"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />

          <InputLabel id="demo-simple-select-helper-label">Nível de Raridade</InputLabel>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Nível de Raridade"
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          className="mb-3"
        >
             <MenuItem value="NORMAL">NORMAL</MenuItem>
             <MenuItem value="RARO">RARO</MenuItem>
             <MenuItem value="MUITO RARO">MUITO RARO</MenuItem>
        </Select>

          { hasTrunfo === true ? message : checkboxDefault }

          <TextField
            id="outlined-search"
            label="Link para Imagem da sua Carta"
            type="text"
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
            className="mb-3"
          />
           <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              onClick={ onSaveButtonClick }
              disabled={ isSaveButtonDisabled }
              data-testid="save-button"
              className="mx-auto"
            >
              Salvar
            </Button>
          </Stack>
    
        </div>


        <form>
          {/* <label htmlFor="cardName">
            Nome da Carta
            <input
              type="text"
              name="cardName"
              value={ cardName }
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label> */}

          {/* <label htmlFor="cardDescription">
            Descrição da Carta
            <textarea
              name="cardDescription"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label> */}

          {/* <label htmlFor="cardAttr1">
            Primeiro Atributo
            <input
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label> */}

          {/* <label htmlFor="cardAttr2">
            Segundo Atributo
            <input
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label> */}
          {/* <label htmlFor="cardAttr3">
            Terceiro Atributo
            <input
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label> */}

          {/* <label htmlFor="cardImage">
            Link para Imagem da sua Carta
            <input
              type="text"
              name="cardImage"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label> */}

          {/* <label htmlFor="cardRare">
            Nível de Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option selectedvalue="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label> */}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
