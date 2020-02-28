import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Panel} from './components/panel-opciones/panel-component';
import {CardContainer} from './components/card-container/card-container-component';
import Card from './components/card/card-component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      nombre: 'Oscar Islas Reyes'
    }
  }

  render(){
    return (
      <div className="App">
        <Panel />
        <CardContainer nombreUsuario={this.state.nombre} email="oislasreyes@gmail.com" />
      </div>
    );
  }
}

export default App;
