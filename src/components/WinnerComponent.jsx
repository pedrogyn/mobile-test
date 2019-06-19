import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WHITE } from "../constants/colors";
import LottieView from "lottie-react-native";

export class WinnerComponent extends Component {
  renderAnimation(gameWinner) {
    if (gameWinner == "Player 1 Wins" || gameWinner == "Player 2 Wins") {
      return (
        <LottieView source={require("../animations/trophy.json")} autoPlay />
      );
    }
    if (gameWinner == "Round Draw") {
      return (
        <LottieView source={require("../animations/draw.json")} autoPlay />
      );
    }

    return null;
  }
  render() {
    let { gameWinner } = this.props;
    return (
      <View
        style={[styles.container, { display: gameWinner ? "flex" : "none" }]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.props.dismiss}
          style={styles.background}
        >
          <Text style={styles.text}>{gameWinner}</Text>

          {this.renderAnimation(gameWinner)}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  background: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 28,
    textTransform: "uppercase",
    color: WHITE,
    marginTop: 40
  }
});
