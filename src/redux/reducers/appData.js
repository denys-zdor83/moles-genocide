
import { HANDLE_CLICK } from './../../constants/constNames'
import { DECREASE_PAUSE } from './../../constants/constNames'
import { CHANGE_SCREEN } from './../../constants/constNames'
import { SET_RANDOM_MOLE } from './../../constants/constNames'
import { CHANGE_TIME } from './../../constants/constNames'
import { SET_PAUSE } from './../../constants/constNames'
import { SET_TIME } from './../../constants/constNames'
import { SET_FAILED } from './../../constants/constNames'
import { SET_DIFFICULTY } from './../../constants/constNames'

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
  time: 4000,
  timer: 4000,
  showScreen: 1,
  currentTime: 0,
  pause: 1000,
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
        pause: state.pause - 200
      }
    }

    case SET_PAUSE: {
      return {
        ...state,
        pause: 1000,
      }
    }

    case SET_RANDOM_MOLE: {
      return {
        ...state,
        moles: showRandomeMole()
      }
    }

    case SET_TIME: {
      const setTime = () => {
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
        timer: setTime(),
      }
    }

    case CHANGE_TIME: {
      const setNewTime = state.timer - 200;
      return {
        ...state,
        time: setNewTime,
        timer: setNewTime
      }
    }

    case SET_FAILED: {
      const setFailed = state.failed + 1;
      return {
        ...state,
        failed: setFailed
      }
    }

    case SET_DIFFICULTY: {
      return {
        ...state,
        difficulty: action.payload
      }
    }

    case HANDLE_CLICK: {
      const newMolesArr = state.moles.map((mole, id) => {
        if (id === action.payload) {
          return mole.isFilled ? 
                {...mole, status: '#24d800'} : 
                {...mole, status: '#f00202'}
        }
        return mole
      });
      const isFailed = !!state.moles.find((mole, id) => {
        if (id === action.payload) {
          return mole.isFilled
        }
      });
      let failedNum = isFailed ? state.failed : state.failed + 1;
      let scoreNum = isFailed ? state.score + 1 : state.score;

      const setTime = () => {
        if (scoreNum >= 0 && scoreNum < 10) {
          return 4000
        } else if (scoreNum >= 10 && scoreNum < 20) {
          return 3000
        } else if (scoreNum >= 20 && scoreNum < 30) {
          return 2000
        } else if (scoreNum >= 30 && scoreNum <= 100) {
          return 1000
        } 
      }
      return {
        ...state,
        moles: newMolesArr,
        pause: 1000,
        time: state.time,
        timer: setTime(),
        failed: failedNum,
        score: scoreNum,
      }
    }

  }
  return state;
}

export default appData;