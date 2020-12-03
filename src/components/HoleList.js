import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Hole from './Hole';

const HoleList = () => {
  const molesData = useSelector(state => state.appData.moles);
  return <Hole molesData={molesData} />
}

export default HoleList;
