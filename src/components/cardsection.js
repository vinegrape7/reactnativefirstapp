import React from "react";
import { View } from "react-native";

const CardSection = props => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#f8f8f8",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
