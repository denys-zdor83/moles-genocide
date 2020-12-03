import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import FailedEnd from './FailedEnd';
import Process from './Process';
import StartGame from './StartGame';
import SucsessEnd from './SucsessEnd';

const config = {
  1: StartGame,
  2: Process,
  3: FailedEnd,
  4: SucsessEnd
}

const GameField = () => {
  const show = useSelector(state => state.appData.showScreen);

  const content = React.useMemo(()=> {
    const Component = config[show] || StartGame
    return <Component />
  }, [show])

  return (
    <GameMainDiv>
      {content}
    </GameMainDiv>
  );
}

const GameMainDiv = styled.div`
  width: 580px; 
  float: left;
  border: 2px solid #000;
  border-radius: 10px;
  background: #ff0;
  height: 400px;
  padding: 20px;
`

export default GameField;