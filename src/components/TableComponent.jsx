import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PositionComponent from "./PositionComponent";

export default class TableComponent extends Component {
  getValueOfPosition(position) {}

  render() {
    return (
      <View>
        <View style={styles.row}>
          <PositionComponent onPress={this.props.onPress} position={1} />
          <PositionComponent onPress={this.props.onPress} position={2} />
          <PositionComponent onPress={this.props.onPress} position={3} />
        </View>
        <View style={styles.row}>
          <PositionComponent onPress={this.props.onPress} position={4} />
          <PositionComponent onPress={this.props.onPress} position={5} />
          <PositionComponent onPress={this.props.onPress} position={6} />
        </View>
        <View style={styles.row}>
          <PositionComponent onPress={this.props.onPress} position={7} />
          <PositionComponent onPress={this.props.onPress} position={8} />
          <PositionComponent onPress={this.props.onPress} position={9} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" }
});
