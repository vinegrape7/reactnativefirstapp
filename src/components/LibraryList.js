import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, ListView } from "react-native";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    let librarieshtml = null;
    librarieshtml = this.props.libraries
      ? this.props.libraries.map(d => {
          return <Text key={d.id}>{d.title}</Text>;
        })
      : null;

    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    libraries: state.libraries,
    selectedlibraryId: state.selectedlibraryId
  };
};

export default connect(mapStateToProps)(LibraryList);
