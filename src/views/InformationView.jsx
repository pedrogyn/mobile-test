import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { PRIMARY_DARK, SECONDARY_DARK, WHITE } from "../constants/colors";
import InformationContainer from "../containers/InformationContainer";

export default class InformationView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: PRIMARY_DARK }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={{ padding: 15 }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Icon name="close" color={WHITE} size={26} />
          </TouchableOpacity>
        </View>
        <InformationContainer />
      </View>
    );
  }
}
