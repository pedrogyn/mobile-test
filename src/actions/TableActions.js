import { SET_PLAYS } from "../constants/reducersConstants/TableReducerConstants";

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
