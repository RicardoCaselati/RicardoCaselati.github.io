import React from 'react';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <Header />
          <SolarSystem />
          <Missions />
        </div>
      </div>
    );
  }
}

export default App;
