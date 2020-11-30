import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const InfoField = () => {
  const state = useSelector(state => state.appData);

  return (
    <div className="info-field main-element">
        <h2>STATUS BAR</h2>
        <div className="item">Game difficult: {state.difficulty}</div>
        <div className="item">Score: {state.score} / 100 point(s)</div>
        <div className="item">You failed: {state.failed} time(s)</div>
        <div className="item">Time: {state.time} ms</div>
    </div>
  );
}


export default InfoField;