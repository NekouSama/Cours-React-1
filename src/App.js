import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  membre1: {
    nom: 'Jérôme',
    age: 27
  },
  membre2: {
    nom: 'Neker',
    age: 20
  },
  membre3: {
    nom: 'ReiconXenon',
    age: 16
  },
  membre4: {
    nom: 'Millenaire',
    age: 14
  },
  membre5: {
    nom: 'NekouSama',
    age: 24
  }
}

const num = 9

class App extends Component {
  state = {
    famille
  }
  handleClick = (num) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }
  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <input type='text' />
          <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
          <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
          <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
          <Membre nom={famille.membre4.nom} age={famille.membre4.age} />
          <Membre nom={famille.membre5.nom} age={famille.membre5.age} />
          <Button vieillir={() => this.handleClick(num)} age={num} />
        </div>
      </Fragment>
    );
  }
}

export default App;
