import {
  SET_PLAYS,
  SET_GAME_STARTED,
  SET_PLAYER_TIME,
  SET_GAME_FINISHED,
  SET_GAME_WINNER
} from "../constants/reducersConstants/TableReducerConstants";

const INITIAL_STATE = {
  plays: [],
  gameStarted: false,
  playerTime: null,
  gameFinished: false,
  gameWinner: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYS:
      return { ...state, plays: action.payload };
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.payload };
    case SET_PLAYER_TIME:
      return { ...state, playerTime: action.payload };
    case SET_GAME_FINISHED:
      return { ...state, gameFinished: action.payload };
    case SET_GAME_WINNER:
      console.log(action.payload);
      return { ...state, gameWinner: action.payload };
    default:
      return state;
  }
};
