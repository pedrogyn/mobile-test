import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { PRIMARY } from "../constants/colors";

export class InformationIcon extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} {...this.props}>
        <Icon
          name="info"
          color={this.props.color || PRIMARY}
          size={this.props.size || 26}
        />
      </TouchableOpacity>
    );
  }
}
