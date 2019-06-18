import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { LIGHT, SECONDARY_DARK } from "../constants/colors";

export default class PositionComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          this.props.onPress && this.props.onPress(this.props.position);
        }}
        style={[styles.position, {}]}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  position: {
    height: (Dimensions.get("window").height - 50) / 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LIGHT,
    width: Dimensions.get("screen").width / 3,
    borderColor: SECONDARY_DARK,
    borderStyle: "solid",
    borderWidth: 0.3
  }
});
