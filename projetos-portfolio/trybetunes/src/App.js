import React from 'react';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center py-5">TrybeTunes</h1>
        <Content />
      </div>
    );
  }
}

export default App;
