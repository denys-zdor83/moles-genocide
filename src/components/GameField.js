import React from 'react';
import { useSelector } from 'react-redux';
import End from './End';
import Process from './Process';
import Start from './Start';

const GameField = () => {
  const show = useSelector(state => state.appData.showScreen);

  const content = React.useMemo(()=> {
    switch (show) {
      case 1: return <Start />
      case 2: return <Process />
      case 3: return <End />
    }
  }, [show])

  return (
    <div className="game-field main-element">
      {content}
    </div>
  );
}

export default GameField;