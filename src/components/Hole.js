import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import filled from '../img/1.png';
import empty from '../img/2.png';
import { HANDLE_CLICK } from './../constants/constNames'

const Hole = ({molesData}) => {
  const dispatch = useDispatch();
  const checkMole = React.useCallback((id) => {
      dispatch({type: HANDLE_CLICK, payload: id});
  }, [dispatch])

  return molesData.map(({id, status, isFilled }) => {
    return (
      <HoleCell 
        key={id}
        status={status}
        isFilled={isFilled}
        onClick={() => checkMole(id)}
      />
    )
  });
}

const HoleCell = styled.div`
    border: 1px solid #000;
    width: 30%;
    height: 160px;
    background-size: contain;
    background: ${({status}) => status} url(${({ isFilled }) =>  isFilled ? filled : empty});
`

export default Hole;