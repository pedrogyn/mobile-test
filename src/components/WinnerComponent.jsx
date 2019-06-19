import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { WHITE } from "../constants/colors";
import LottieView from "lottie-react-native";

export class WinnerComponent extends Component {
  render() {
    let { gameWinner } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: this.props.gameWinner ? "flex" : "none",
          // display: "none",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.props.dismiss}
          style={{
            flex: 1,
            // justifyContent: "center"
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textTransform: "uppercase",
              color: WHITE,
              marginTop: 40
            }}
          >
            {this.props.gameWinner}
          </Text>
          <LottieView
            source={require("../animations/trophy.json")}
            autoPlay
            loop
          />
        </TouchableOpacity>
      </View>
    );
  }
}
