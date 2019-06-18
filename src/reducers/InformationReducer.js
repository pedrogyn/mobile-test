import { SET_FINISHED_GAMES } from "../constants/reducersConstants/InformationReducerConstants";

const INITIAL_STATE = {
  finishedGames: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FINISHED_GAMES:
      return { ...state, finishedGames: action.payload };
    default:
      return state;
  }
};
