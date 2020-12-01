import React from 'react';
import { useSelector } from 'react-redux';

import End from './End';
import Process from './Process';
import Start from './Start';

const config = {
  1: Start,
  2: Process,
  3: End
}

const GameField = () => {
  const show = useSelector(state => state.appData.showScreen);

  const content = React.useMemo(()=> {
    const Component = config[show] || Start
    return <Component />
  }, [show])

  return (
    <div className="game-field main-element">
      {content}
    </div>
  );
}

export default GameField;