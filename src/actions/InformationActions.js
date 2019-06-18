import { loadGames } from "../services/games";
import { SET_FINISHED_GAMES } from "../constants/reducersConstants/InformationReducerConstants";

export async function loadGamesAction() {
  return async (dispatch, getState) => {
    let games = [];

    try {
      let result = await loadGames();
      if (result) {
        games = result;
      }
    } catch (err) {}

    dispatch({
      type: SET_FINISHED_GAMES,
      payload: games
    });
  };
}
