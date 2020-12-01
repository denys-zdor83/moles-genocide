import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { CHANGE_SCREEN } from './../constants/constNames';

const Start = () => {
  const dispatch = useDispatch();

  function startGame(event) {
    if (event.keyCode === 13) {
      dispatch({ type: CHANGE_SCREEN, payload: 2 })
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', startGame);
    // return window.removeEventListener('keydown', startGame);
  }, [])

  return (
    <div className="to-start-game">
        To start the game press Enter
    </div>
  );
}

export default Start;