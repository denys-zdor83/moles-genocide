import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HolesOfMoles from './HolesOfMoles';
import { DECREASE_PAUSE } from './../constants/constNames'
import { SET_TIME } from './../constants/constNames'
import { SET_RANDOM_MOLE } from './../constants/constNames'
import { CHANGE_TIME } from './../constants/constNames'
import { SET_PAUSE } from './../constants/constNames'


const Process = () => {
  const failed = useSelector(state => state.appData.failed);
  const time = useSelector(state => state.appData.time);
  const pause = useSelector(state => state.appData.pause);
  const dispatch = useDispatch();



  const gameLoop = React.useCallback(() => {
    if (time <= 0) dispatch({type: SET_PAUSE});
    if (pause !== 0) {
      dispatch({type: DECREASE_PAUSE});
      return
    }
    if (time <= 0) dispatch({type: SET_RANDOM_MOLE});
    if (!time) dispatch({type: SET_TIME});

    if (time > 0) dispatch({type: CHANGE_TIME});
  }, [pause, 
      time, 
      dispatch]
  );



  React.useEffect(() => {
    const intervalId = setInterval(gameLoop, 20);
    return () => clearInterval(intervalId);
  }, [gameLoop]);

  return (
    <HolesOfMoles />
  );
}

export default Process;