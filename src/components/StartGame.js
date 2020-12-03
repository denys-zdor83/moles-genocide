import React from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';

import { CHANGE_SCREEN } from '../constants/constNames';

const StartGame = () => {
  const dispatch = useDispatch();

  function startGame(event) {
    if (event.keyCode === 13) {
      dispatch({ type: CHANGE_SCREEN, payload: 2 })
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', startGame);
    return () => {
      window.removeEventListener('keydown', startGame);
    } 
  }, []);

  return (
    <ToStartGame>
        To start the game press Enter
    </ToStartGame>
  );
}

const ToStartGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 36px;
  font-weight: 500;
`

export default StartGame;