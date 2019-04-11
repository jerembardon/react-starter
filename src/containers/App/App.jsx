import React, { Component } from 'react';
import {Button} from './../../components/Button/index'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> React Webpack Starter </h1>
        <p> Select module you want to install </p>
        <Button> Hello </Button>
      </React.Fragment>
    );
  }
}

export default App;
