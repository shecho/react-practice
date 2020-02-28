import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Panel} from '../src/components/panel-opciones/panel-component';
import {CardContainer} from './components/card-container/card-container-component.jsx';
// import Card from './components/card/card-component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      nombre: 'Sergio Valencia Aguirre'
    }
  }

  render(){
    return (
      <div className="App">
        <Panel />
        <CardContainer nombreUsuario={this.state.nombre} email="sergi_3000@hotmail.com" />
      </div>
    );
  }
}

export default App;
