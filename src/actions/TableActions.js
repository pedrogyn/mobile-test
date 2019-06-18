import {
  SET_PLAYS,
  SET_GAME_STARTED,
  SET_PLAYER_TIME
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

export async function startGame() {
  return async (dispatch, getState) => {
    dispatch([
      {
        type: SET_GAME_STARTED,
        payload: true
      },
      {
        type: SET_PLAYER_TIME,
        payload: 1
      }
    ]);
  };
}

export async function restartGame() {
  return async (dispatch, getState) => {
    dispatch([
      {
        type: SET_GAME_STARTED,
        payload: false
      },
      {
        type: SET_PLAYER_TIME,
        payload: null
      }
    ]);
  };
}
