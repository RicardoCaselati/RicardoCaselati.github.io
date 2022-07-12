import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoadingPage from '../components/LoadingPage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

class Login extends React.Component {
  state = {
    inputName: '',
    buttonDisabled: true,
    loading: false,
    redirectPage: false,
  };

handleChange = (event) => {
  const userNameLength = event.target.value.length;
  const minName = 3;
  if (userNameLength >= minName) {
    this.setState({
      buttonDisabled: false,
      inputName: event.target.value,
    });
  } else {
    this.setState({
      buttonDisabled: true,
      inputName: event.target.value,
    });
  }
}

  handleClick = async () => {
    const { inputName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: inputName });
    this.setState({
      loading: false,
      redirectPage: true,
    });
  }

  render() {
    const { buttonDisabled, loading, redirectPage } = this.state;
    
    const card = (
      <React.Fragment>
        <CardContent>
          <input
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"

            placeholder="Nome"
            data-testid="login-name-input"
            name="userName"
            type="text"
            onChange={ this.handleChange }
          />
            <button
              type="submit"
              className="btn btn-outline-secondary d-flex my-2 align-items-center justify-content-center"
              id="button-addon2"
              disabled={ buttonDisabled }
              onClick={ this.handleClick }
              data-testid="login-submit-button"
            >
            Entrar
            </button>
        </CardContent>
      </React.Fragment>
    );

    const cardToShow = (
      <Card variant="outlined">{card}</Card>
    )

    return (
      <div className="d-flex flex-row justify-content-center align-items-center" style={{ height:"400px" }} >
         <div className="row d-flex justify-content-center" >
          <div className="col" >
            <div data-testid="page-login" className="input-group mb-3" >
              <Box sx={{ minWidth: 280 }} >
                { loading ? <LoadingPage /> : cardToShow }
                { redirectPage && <Redirect to="/search" /> }
              </Box>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
