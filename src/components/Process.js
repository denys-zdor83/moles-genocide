import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HolesOfMoles from './HolesOfMoles';
import { DECREASE_PAUSE } from './../constants/constNames'
import { SET_TIME } from './../constants/constNames'
import { SET_RANDOM_MOLE } from './../constants/constNames'
import { CHANGE_TIME } from './../constants/constNames'
import { SET_PAUSE } from './../constants/constNames'
import { SET_FAILED } from './../constants/constNames'
import { CHANGE_SCREEN } from './../constants/constNames'
import { SET_DIFFICULTY } from './../constants/constNames'


const Process = () => {
  const difficulty = useSelector(state => state.appData.difficulty);
  const failed = useSelector(state => state.appData.failed);
  const score = useSelector(state => state.appData.score);
  const time = useSelector(state => state.appData.time);
  const timer = useSelector(state => state.appData.timer);
  const pause = useSelector(state => state.appData.pause);
  const dispatch = useDispatch();

  const config = {
    10: 2,
    20: 3,
    30: 4,
    40: 5,
    50: 6,
    60: 7,
    70: 8,
    80: 9,
    90: 10
  }
  const gameLoop = React.useCallback(() => {
    if (config[score]) {
      dispatch({type: SET_DIFFICULTY, payload: config[score]})
    }
    if (score === 100) {
      dispatch({type: CHANGE_SCREEN, payload: 4})
    }
    if (failed === 3) {
      dispatch({type: CHANGE_SCREEN, payload: 3})
    }
    if (time === 200) {
      dispatch({type: SET_PAUSE})
    }
    if (pause) {
      dispatch({type: DECREASE_PAUSE});
      return
    }
    if (time <= 0) {
      dispatch({type: SET_FAILED})
    }
    if (timer <= 0) {
      dispatch({type: SET_TIME})
    }

    if (timer === 4000 && difficulty === 1 || 
        timer === 3000 && difficulty === 2 || 
        timer === 2000 && difficulty === 3 || 
        timer === 1000 && difficulty > 3 ) {
      dispatch({type: SET_RANDOM_MOLE})
    }
    if (timer !== 0) {
      dispatch({type: CHANGE_TIME})
    }

  }, [pause, 
      difficulty,
      failed,
      score,
      time,
      timer, 
      dispatch]
  );

  React.useEffect(() => {
    const intervalId = setInterval(gameLoop, 500);
    return () => clearInterval(intervalId);
  }, [gameLoop]);

  return (
    <HolesOfMoles />
  );
}

export default Process;