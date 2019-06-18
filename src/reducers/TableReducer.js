import {
  SET_PLAYS,
  SET_GAME_STARTED,
  SET_PLAYER_TIME
} from "../constants/reducersConstants/TableReducerConstants";

const INITIAL_STATE = {
  plays: [],
  gameStarted: false,
  playerTime: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYS:
      return { ...state, plays: action.payload };
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.payload };
    case SET_PLAYER_TIME:
      return { ...state, playerTime: action.payload };
    default:
      return state;
  }
};
