import {
  SET_PLAYS,
  SET_GAME_STARTED,
  SET_PLAYER_TIME,
  SET_GAME_FINISHED,
  SET_GAME_WINNER
} from "../constants/reducersConstants/TableReducerConstants";
import { saveGame } from "../services/games";

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
        type: SET_GAME_FINISHED,
        payload: false
      },
      {
        type: SET_PLAYER_TIME,
        payload: 1
      },
      {
        type: SET_PLAYS,
        payload: []
      }
    ]);
  };
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

      let winnerGame = verifyWinnerGame(tempPlays);

      if (
        winnerGame == "Player 1 Wins" ||
        winnerGame == "Player 2 Wins" ||
        winnerGame == "Round Draw"
      ) {
        try {
          let savedGame = await saveGame(tempPlays);
          console.log(savedGame);
        } catch (err) {
          console.log(err);
        }

        dispatch([
          {
            type: SET_GAME_FINISHED,
            payload: true
          },
          {
            type: SET_PLAYER_TIME,
            payload: null
          },
          {
            type: SET_GAME_WINNER,
            payload: winnerGame
          }
        ]);
      }
    }
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

function verifyWinnerGame(plays) {
  let playsObj = {};
  for (let play of plays) {
    playsObj[play.position] = play;
  }

  let winnerCombinations = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["3", "5", "7"],
    ["1", "5", "9"]
  ];

  for (winnerCombination of winnerCombinations) {
    let p1 = winnerCombination[0];
    let p2 = winnerCombination[1];
    let p3 = winnerCombination[2];

    let value1 = playsObj[p1] && playsObj[p1].value;
    let value2 = playsObj[p2] && playsObj[p2].value;
    let value3 = playsObj[p3] && playsObj[p3].value;

    if (value1 == "x" && value2 == "x" && value3 == "x") {
      return "Player 1 Wins";
    }
    if (value1 == "o" && value2 == "o" && value3 == "o") {
      return "Player 2 Wins";
    }
  }

  if (plays.length == 9) {
    return "Round Draw";
  }

  return "Game running";
}

export async function dismissWinnerComponent() {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_GAME_WINNER,
      payload: null
    });
  };
}
