import React from 'react';
import styled from 'styled-components';

import GameField from './components/GameField';
import InfoField from './components/InfoField';


function App() {
  return (
    <MainContainer>
      <h1>Genocide of Moles</h1>

      <div className="game-area">
        <GameField />
        <InfoField />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 850px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`

export default App;