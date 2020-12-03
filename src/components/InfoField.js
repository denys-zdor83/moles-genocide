import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const InfoField = () => {
  const state = useSelector(state => state.appData);

  return (
    <InfoMainDiv>
      <h2>STATUS BAR</h2>
      <div className="item">Game difficult: {state.difficulty}</div>
      <div className="item">Score: {state.score} / 100 point(s)</div>
      <div className="item">You failed: {state.failed} time(s)</div>
      <div className="item">Time: {state.time} ms</div>
    </InfoMainDiv>
  );
}

const InfoMainDiv = styled.div`
  width: 250px;
  float: right;
  border: 2px solid #000;
  border-radius: 10px;
  background: #ff0;
  height: 400px;
  padding: 20px;
  h2 {
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  .item {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 17px;
  }
`

export default InfoField;