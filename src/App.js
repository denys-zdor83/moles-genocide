import React from 'react';
import GameField from './components/GameField';
import InfoField from './components/InfoField';
import {useSelector, useDispatch} from 'react-redux';

function App() {


  return (
    <div className="container">
      <h1>Genocide of Moles</h1>

      <div className="game-area">
        <GameField />
        <InfoField />
      </div>
    </div>
  );
}

export default App;