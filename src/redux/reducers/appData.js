
const initialState = {
  difficulty: 1,
  score: 0,
  failed: 0,
  time: 4000,
  showScreen: 1,
  isClick: false,
  currentTime: 0,
  pause: 500,
  showFirstMole: true,
  moles: [
    {
      id: 0,
      status: '#fff',
      isFilled: false,
    },
    {
      id: 1,
      status: '#fff',
      isFilled: false,
    },
    {
      id: 2,
      status: '#fff',
      isFilled: false,
    },
    {
      id: 3,
      status: '#fff',
      isFilled: false,
    },
    {
      id: 4,
      status: '#fff',
      isFilled: false,
    },
    {
      id: 5,
      status: '#fff',
      isFilled: false,
    }
  ]
}

function appData(state = initialState, action) {
  switch (action.type) {

    case 'CHANGE_SCREEN': 
    return {
      ...state,
      showScreen: action.payload,
    }

    case 'CHANGE_TIME': 
    const setNewTime = state.time - 20;
    let setFail = state.failed;
    if (!setNewTime) {
      setFail += 1;
    }
    return {
      ...state,
      failed: setFail,
      time: setNewTime
    }

    case 'SET_END_SCREEN': 
    return {
      ...state,
      showScreen: 3,
      time: 0
    }

    case 'DECREASE_PAUSE': 
    return {
      ...state,
      pause: state.pause - 20
    }

    case 'SET_AND_CANCEL_FIRST_MOLE': 
    const random = Math.floor( Math.random() * 6 );
    const newArrMoles = state.moles.map(mole => ({...mole, isFilled: false})).map((mole, id) => {
      if (id === random) {
        return {
          ...mole,
          isFilled: true
        }
      }
      return mole;
    })

    return {
      ...state,
      moles: newArrMoles,
      showFirstMole: false
    }
    
    case 'SET_TIME': 
    let setTime;
    if (state.difficulty === 1) {
      setTime = 4000;
    } else if (state.difficulty === 2) {
      setTime = 3000;
    } else if (state.difficulty === 3) {
      setTime = 2000;
    } else if (state.difficulty >= 4) {
      setTime = 1000;
    }
    const random2 = Math.floor( Math.random() * 6 );
    const newArrMoles2 = state.moles.map(mole => ({...mole, isFilled: false, status: '#fff'})).map((mole, id) => {
      if (id === random2) {
        return {
          ...mole,
          isFilled: true
        }
      }
      return mole;
    });
    const setPause = state.isClick ? 0 : 500;
    return {
      ...state,
      time: setTime,
      isClick: false,
      pause: setPause,
      moles: newArrMoles2
    }

    case "SUCSESS_CLICK": 
    let arrSucsess = state.moles.map((mole, id) => {
      if (id === action.payload) {
        return {
          ...mole,
          status: '#1ef302'
        }
      }
      return mole
    });
    let setScore = state.score + 1;
    let setDifficulty;
    if (setScore < 10) {
      setDifficulty = 1
    } else if (setScore >= 10 && setScore < 20) {
      setDifficulty = 2
    } else if (setScore >= 20 && setScore < 30) {
      setDifficulty = 3
    } else if (setScore >= 30 && setScore < 40) {
      setDifficulty = 4
    }
    return {
      ...state,
      score: setScore,
      difficulty: setDifficulty,
      isClick: true,
      pause: 500,
      time: 0,
      moles: arrSucsess
    }

    case "FAIL_CLICK": 
    let arrFail = state.moles.map((mole, id) => {
      if (id === action.payload) {
        return {
          ...mole,
          status: '#ff0000'
        }
      }
      return mole
    });
    return {
      ...state,
      failed: state.failed + 1,
      pause: 500,
      time: 0,
      isClick: true,
      moles: arrFail
    }

  }
  return state;
}

export default appData;