import {
  SET_PLAYS,
  SET_GAME_STARTED
} from "../constants/reducersConstants/TableReducerConstants";

/**
 *
 * @param {*} plays plays is array of play
 */
export async function setPlaysAction(plays) {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_PLAYS,
      payload: plays
    });
  };
}
/**
 *
 * @param {*} boolean set game starter
 */
export async function setSetGameStarted(boolean) {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_GAME_STARTED,
      payload: boolean
    });
  };
}
