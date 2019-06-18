import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PositionComponent from "./PositionComponent";

export default class TableComponent extends Component {
  getValueOfPosition(position) {
    let plays = [];

    if (this.props.plays) {
      plays = this.props.plays;
    }

    if (plays.length == 0) {
      return null;
    }

    let play = plays.find(x => x.position === position);

    if (!play) {
      return null;
    }

    return play.value;
  }

  componentDidMount() {
    this.getValueOfPosition(1);
  }

  render() {
    return (
      <View>
        <View style={styles.row}>
          <PositionComponent
            onPress={this.props.onPress}
            position={1}
            value={this.getValueOfPosition(1)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={2}
            value={this.getValueOfPosition(2)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={3}
            value={this.getValueOfPosition(3)}
          />
        </View>
        <View style={styles.row}>
          <PositionComponent
            onPress={this.props.onPress}
            position={4}
            value={this.getValueOfPosition(4)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={5}
            value={this.getValueOfPosition(5)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={6}
            value={this.getValueOfPosition(6)}
          />
        </View>
        <View style={styles.row}>
          <PositionComponent
            onPress={this.props.onPress}
            position={7}
            value={this.getValueOfPosition(7)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={8}
            value={this.getValueOfPosition(8)}
          />
          <PositionComponent
            onPress={this.props.onPress}
            position={9}
            value={this.getValueOfPosition(9)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" }
});
