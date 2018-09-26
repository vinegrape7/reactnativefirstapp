import React from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends React.Component {
  state = {
    albums: []
  };
  componentWillMount() {
    console.log("[albumblist] component Will Mount");
  }

  componentDidMount() {
    console.log("[albumblist] component Did Mount");
    axios.get("http://rallycoding.herokuapp.com/api/music_albums").then(response => {
      console.log(response);
      this.setState({ albums: response.data });
    });
  }

  render() {
    console.log("[albumblist] render");
    const { textStyle, viewStyle } = styles;
    let albums = null;
    if (this.state.albums.length > 0) {
      albums = this.state.albums.map(album => {
        return <AlbumDetail key={album.title} album={album} />;
      });
    }
    return <View style={viewStyle}>{albums}</View>;
  }
}

const styles = {
  viewStyle: {},
  textStyle: {}
};

export default AlbumList;
