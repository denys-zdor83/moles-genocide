import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import filled from '../img/1.png';
import empty from '../img/2.png';

const GetMoles = () => {
    const molesData = useSelector(state => state.appData.moles);
    const dispatch = useDispatch();
    const checkMole = React.useCallback((id, isFilled) => {
      if (isFilled) {
        dispatch({type: "SUCSESS_CLICK", payload: id});
      } else {
        dispatch({type: "FAIL_CLICK", payload: id});
      }
    }, [dispatch])
    const moles = molesData.map(({id, status, isFilled }) => {
        return (
          <HoleCell 
            key={id}
            status={status}
            isFilled={isFilled}
            onClick={()=> checkMole(id, isFilled)}
          />
        )
      });
    return moles
}

const HoleCell = styled.div`
    border: 1px solid #000;
    width: 30%;
    height: 160px;
    background-size: contain;
    background: ${({status}) => status} url(${({ isFilled }) =>  isFilled ? filled : empty});
`

export default GetMoles;
