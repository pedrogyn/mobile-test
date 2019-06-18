import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import ScoreFooterComponent from "../components/ScoreFooterComponent";
import TableComponent from "../components/TableComponent";
import { RESTART_GAME, START_GAME } from "../constants/strings";

class TableContainer extends Component {
  render() {
    let { TableReducer } = this.props;
    let { gameStarted } = TableReducer;
    return (
      <View style={{ flex: 1 }}>
        <TableComponent
          plays={[
            {
              position: 1,
              value: "x"
            }
          ]}
          onPress={position => {
            alert(position);
          }}
        />
        <ScoreFooterComponent
          // playerTimeText={}
          title={!gameStarted ? START_GAME : RESTART_GAME}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  TableReducer: state.TableReducer
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
