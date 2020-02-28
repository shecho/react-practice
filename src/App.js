import React from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './components/panel-opciones/panel-component';
import Card from './components/card/card-component';

function App() {
  return (
    <div className="App">
      <Panel>
        <Card />
      </Panel>
    </div>
  );
}

export default App;
