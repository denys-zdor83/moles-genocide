import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Start = () => {
  const dispatch = useDispatch();

  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      dispatch({ type: 'CHANGE_SCREEN', payload: 2 })
    }
  });

  return (
    <div className="to-start-game">
        To start the game press Enter
    </div>
  );
}

export default Start;