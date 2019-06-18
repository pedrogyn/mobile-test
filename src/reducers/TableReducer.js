import { SET_PLAYS } from "../constants/reducersConstants/TableReducerConstants";

const INITIAL_STATE = {
  plays: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYS:
      return { ...state, plays: action.payload };
    default:
      return state;
  }
};
