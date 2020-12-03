import React from 'react';
import styled from 'styled-components';

const SucsessEnd = () => {
  return (
    <EndScreen>
      YOU WON
    </EndScreen>
  );
}

const EndScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 36px;
  font-weight: 500;
`

export default SucsessEnd;