import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { PRIMARY_DARK, WHITE, SECONDARY_DARK } from "../constants/colors";
import { InformationIcon } from "./InformationIcon";

export default class ScoreFooterComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={styles.container}
      >
        <Text style={styles.textPlayerTime}>{this.props.playerTimeText}</Text>

        <InformationIcon
          onPress={this.props.informationOnPress}
          color={WHITE}
          style={{ position: "absolute", right: 8 }}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: PRIMARY_DARK,
    height: 50
  },
  textPlayerTime: {
    position: "absolute",
    left: 8,
    textTransform: "uppercase",
    letterSpacing: -0.5,
    fontWeight: "bold",
    color: WHITE
  },
  title: { color: WHITE, textTransform: "uppercase" }
});
