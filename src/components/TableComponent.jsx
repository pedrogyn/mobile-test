import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PositionComponent from "./PositionComponent";

export default class TableComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <PositionComponent />
          <PositionComponent />
          <PositionComponent />
        </View>
        <View style={styles.row}>
          <PositionComponent />
          <PositionComponent />
          <PositionComponent />
        </View>
        <View style={styles.row}>
          <PositionComponent />
          <PositionComponent />
          <PositionComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" }
});
