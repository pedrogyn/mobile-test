import React, { Component } from "react";
import { View, Text, Alert } from "react-native";

import { connect } from "react-redux";
import ScoreFooterComponent from "../components/ScoreFooterComponent";
import TableComponent from "../components/TableComponent";
import { RESTART_GAME, START_GAME } from "../constants/strings";
import { startGame, play } from "../actions/TableActions";

class TableContainer extends Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  play(position) {
    let { TableReducer } = this.props;
    let { gameStarted } = TableReducer;
    if (gameStarted) {
      this.props.play(position);
    }
  }

  startGame() {
    let { TableReducer } = this.props;
    let { gameStarted } = TableReducer;
    if (gameStarted) {
      return Alert.alert(
        "Restart Game",
        "Are you sure you want to restart the game?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Restart", onPress: () => this.props.startGame() }
        ]
      );
    }

    this.props.startGame();
  }
  render() {
    let { TableReducer } = this.props;
    let { gameStarted, playerTime, plays } = TableReducer;
    return (
      <View style={{ flex: 1 }}>
        <TableComponent plays={plays} onPress={this.play} />
        <ScoreFooterComponent
          informationOnPress={this.props.informationScreen}
          playerTimeText={playerTime ? `Player ${playerTime}` : ""}
          onPress={this.startGame}
          title={!gameStarted ? START_GAME : RESTART_GAME}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  TableReducer: state.TableReducer
});

const mapDispatchToProps = {
  startGame,
  play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
