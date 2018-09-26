import React from "react";
import { Text, View, Button, TextInput } from "react-native";

class FlexBasicsOne extends React.Component {
  render() {
    const { container, boxContainer, boxOne, boxTwo, boxThree } = styles;
    return (
      <View style={container}>
        <View style={[boxContainer, boxOne]}>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
        </View>
        <View style={[boxContainer, boxTwo]}>
          <Text>2</Text>
        </View>
        <View style={[boxContainer, boxThree]}>
          <Text>3</Text>
          <Text>3</Text>
          <Text>3</Text>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  boxOne: {
    flex: 3,
    backgroundColor: "#FFEEE4",
    justifyContent: "space-around"
  },
  boxTwo: {
    backgroundColor: "#F17F42"
  },
  boxThree: {
    flexDirection: "row",
    flex: 2,
    backgroundColor: "#CE6D39",
    justifyContent: "space-between", //main axis - row (x axis)/ column (y-axis)
    alignItems: "center" //cross axis
  }
};

export default FlexBasicsOne;
