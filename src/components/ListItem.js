import React, { Component } from "react";
import CardSection from "./cardsection";
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  componentWillUpdate() {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();
  }
  renderDescription = () => {
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text style={styles.descriptionStyle}>{library.description}</Text>;
    }
  };

  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.selectLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    marginLeft: 20,
    padding: 10
  },
  descriptionStyle: {
    marginLeft: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedlibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
