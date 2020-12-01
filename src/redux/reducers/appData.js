
import { HANDLE_CLICK } from './../../constants/constNames'
import { DECREASE_PAUSE } from './../../constants/constNames'
import { CHANGE_SCREEN } from './../../constants/constNames'
import { SET_RANDOM_MOLE } from './../../constants/constNames'
import { CHANGE_TIME } from './../../constants/constNames'
import { SET_PAUSE } from './../../constants/constNames'
import { SET_TIME } from './../../constants/constNames'

const molesArray = new Array(6)
                  .fill('')
                  .map((_, id)=> ({
                    id: id,
                    status: '#fff',
                    isFilled: false,
                  }));

const showRandomeMole = () => {
  const random = Math.floor( Math.random() * 6 );
  return molesArray.map((mole, id) => {
    if (id === random) {
      return {
        ...mole,
        isFilled: true
      }
    }
    return mole;
  })
}

const initialState = {
  difficulty: 1,
  score: 0,
  failed: 0,
  time: 0,
  showScreen: 1,
  currentTime: 0,
  pause: 0,
  showFirstMole: true,
  moles: molesArray
}

function appData(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCREEN: {
      return {
        ...state,
        showScreen: action.payload,
      }
    }
    case DECREASE_PAUSE: {
      return {
        ...state,
        pause: state.pause - 20
      }
    }
    case SET_PAUSE: {
      return {
        ...state,
        pause: 500,
        time: 0
      }
    }
    case SET_RANDOM_MOLE: {
      return {
        ...state,
        moles: showRandomeMole()
      }
    }
    case SET_TIME: {
      let setTime = () => {
        switch(state.difficulty) {
          case 1: return 4000;
          case 2: return 3000;
          case 3: return 2000;
          default: return 1000;
        }
      }
      return {
        ...state,
        time: setTime(),
      }
    }

    case CHANGE_TIME: 
    const setNewTime = state.time - 20;
    return {
      ...state,
      time: setNewTime
    }

    // case 'SET_END_SCREEN': 
    // return {
    //   ...state,
    //   showScreen: 3,
    //   time: 0
    // }

    case HANDLE_CLICK: 
    console.log(action.payload)
    return {
      ...state
    }

    // case 'SET_AND_CANCEL_FIRST_MOLE': 
    // const random = Math.floor( Math.random() * 6 );
    // const newArrMoles = state.moles.map(mole => ({...mole, isFilled: false})).map((mole, id) => {
    //   if (id === random) {
    //     return {
    //       ...mole,
    //       isFilled: true
    //     }
    //   }
    //   return mole;
    // })

    // return {
    //   ...state,
    //   moles: newArrMoles,
    //   showFirstMole: false
    // }
    

    // case "SUCSESS_CLICK": 
    // let arrSucsess = state.moles.map((mole, id) => {
    //   if (id === action.payload) {
    //     return {
    //       ...mole,
    //       status: '#1ef302'
    //     }
    //   }
    //   return mole
    // });
    // let setScore = state.score + 1;
    // let setDifficulty;
    
    // if (setScore < 10) {
    //   setDifficulty = 1
    // } else if (setScore >= 10 && setScore < 20) {
    //   setDifficulty = 2
    // } else if (setScore >= 20 && setScore < 30) {
    //   setDifficulty = 3
    // } else if (setScore >= 30 && setScore < 40) {
    //   setDifficulty = 4
    // }
    // return {
    //   ...state,
    //   score: setScore,
    //   difficulty: setDifficulty,
    //   pause: 500,
    //   time: 0,
    //   moles: arrSucsess
    // }

    // case "FAIL_CLICK": 
    // let arrFail = state.moles.map((mole, id) => {
    //   if (id === action.payload) {
    //     return {
    //       ...mole,
    //       status: '#ff0000'
    //     }
    //   }
    //   return mole
    // });
    // return {
    //   ...state,
    //   failed: state.failed + 1,
    //   pause: 500,
    //   time: 0,
    //   moles: arrFail
    // }

  }
  return state;
}

export default appData;