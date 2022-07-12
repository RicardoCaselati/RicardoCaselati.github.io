import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingPage from './LoadingPage';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';


class Header extends React.Component {
  state = {
    name: '',
    loading: false,
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const inputUser = await getUser();
    this.setState({
      name: inputUser.name,
      loading: false,
    });
  }
  
    render() {
      const {
        loading,
        name,
      } = this.state;

      const printName = (
      <Typography sx={{ minWidth: 100 }}>
        <h2 data-testid="header-user-name">Olá, { name }</h2>
      </Typography>
      );

    return (
      <header data-testid="header-component">
        <div className="d-flex justify-content-end align-items-center">
          { loading ? <LoadingPage /> : printName }
        </div>
        <React.Fragment className="container">
          <Box 
            className="d-flex justify-content-around text-center align-items-center p-5"
            sx={{  }}
          >
            <Typography sx={{ padding: '80px', border: '2px solid gray ' }}>
              <Link to="/search" style={{ minWidth: 100, textDecoration: 'none', color: 'gray' }} data-testid="link-to-search">Search</Link>
            </Typography>
            <Typography sx={{ padding: '80px', border: '2px solid gray ' }}>
              <Link to="/favorites" style={{ minWidth: 100, textDecoration: 'none', color: 'gray' }} data-testid="link-to-favorites">Favorites</Link>
            </Typography>
            <Typography sx={{ padding: '80px', border: '2px solid gray ' }}>
              <Link to="/profile" style={{ minWidth: 100, textDecoration: 'none', color: 'gray' }} data-testid="link-to-profile">Profile</Link>
            </Typography>
          </Box>
        </React.Fragment>
      </header>
    );
  }
}
export default Header;
