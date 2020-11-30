import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HolesOfMoles from './HolesOfMoles';

const Process = () => {
  const failed = useSelector(state => state.appData.failed);
  const time = useSelector(state => state.appData.time);
  const pause = useSelector(state => state.appData.pause);
  const isClick = useSelector(state => state.appData.isClick);
  const showFirstMole = useSelector(state => state.appData.showFirstMole);
  const dispatch = useDispatch();

  const countDown = React.useCallback(() => {
    if (time > 0) {
      dispatch({type: 'CHANGE_TIME'})
    }
  }, [time, dispatch]); 

  const gameLoop = React.useCallback(() => {
    if (pause !== 0) {
      dispatch({type: 'DECREASE_PAUSE'});
      return
    }
    if (!time) dispatch({type: 'SET_TIME'});
    if (showFirstMole) dispatch({type: 'SET_AND_CANCEL_FIRST_MOLE'});
    if (failed === 3) dispatch({type: 'SET_END_SCREEN'});
    countDown()
  }, [countDown, 
      pause, 
      time, 
      isClick, 
      failed,
      dispatch, 
      showFirstMole]
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