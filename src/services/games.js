/**
 * @todo replace AsyncStorage to react-native-community/AsyncStorage
 */

import { AsyncStorage } from "react-native";

export async function saveGame(plays) {
  return new Promise(async (resolve, reject) => {
    let games = [];
    try {
      let result = await loadGames();
      if (result) {
        games = result;
      }
    } catch (err) {
      reject(err);
    }

    games.push(plays);
    games = JSON.stringify(games);
    try {
      let savedGame = await AsyncStorage.setItem("savedGames", games);
      resolve(savedGame);
    } catch (err) {
      reject({
        err,
        message: "Error on save game"
      });
    }
  });
}

export async function loadGames() {
  return new Promise(async (resolve, reject) => {
    try {
      let games = await AsyncStorage.getItem("savedGames");
      games = JSON.parse(games);
      resolve(games);
    } catch (err) {
      reject({
        err,
        message: "Error on load games"
      });
    }
  });
}
