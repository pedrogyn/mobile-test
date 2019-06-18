import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { WHITE } from "../constants/colors";
import { loadGamesAction } from "../actions/InformationActions";

class InformationContainer extends Component {
  componentDidMount() {
    this.props.loadGamesAction();
  }

  render() {
    let { InformationReducer } = this.props;
    let { finishedGames } = InformationReducer;
    return (
      <View style={styles.container}>
        <Text style={{ color: WHITE, fontSize: 18 }}>
          Jogos realizados:{" "}
          <Text style={{ fontWeight: "bold" }}>{finishedGames.length}</Text>
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  InformationReducer: state.InformationReducer
});

const mapDispatchToProps = {
  loadGamesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationContainer);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
