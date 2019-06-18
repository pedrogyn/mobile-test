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
      },
      {
        type: SET_PLAYS,
        payload: []
      }
    ]);
  };
}

function getPlayValue(playerTime) {
  switch (playerTime) {
    case 1:
      return "x";
    case 2:
      return "o";
  }
}

function checkPlayerTime(playerTime) {
  switch (playerTime) {
    case 1:
      return 2;
    case 2:
      return 1;
  }
}

export async function play(position) {
  return async (dispatch, getState) => {
    let state = getState();

    // alert(position);
    let { TableReducer } = state;
    let { plays, playerTime } = TableReducer;

    let index = plays.findIndex(x => x.position === position);

    if (index == -1) {
      let tempPlays = plays;
      tempPlays.push({
        position,
        player: playerTime,
        value: getPlayValue(playerTime)
      });

      dispatch([
        {
          type: SET_PLAYER_TIME,
          payload: checkPlayerTime(playerTime)
        },
        {
          type: SET_PLAYS,
          payload: tempPlays
        }
      ]);
    }
  };
}
