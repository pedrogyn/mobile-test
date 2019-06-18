import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { WHITE } from "../constants/colors";

class InformationContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: WHITE, fontSize: 18 }}>
          Jogos realizados: <Text style={{ fontWeight: "bold" }}>18</Text>
        </Text>
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
)(InformationContainer);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
