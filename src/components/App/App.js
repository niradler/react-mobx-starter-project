import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

import Routes from '../../routes';

@inject('routing')
@observer
class App extends Component {
  render() {
    const { location, push, goBack } = this.props.routing;
    return (
      <div className="App">
        <div>
        <span>Current pathname: {location.pathname}</span>
        <button onClick={() => push('/test')}>Change url</button>
        <button onClick={() => goBack()}>Go Back</button>
        <button onClick={() => push('/')}>Home</button>
        </div>

        <Routes />
      </div>
    );
  }
}

export default App;
