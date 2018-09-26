import React from "react";
import { Text, View, Image, Button, TouchableOpacity, Linking } from "react-native";
import Card from "./card";
import CardSection from "./cardsection";

class AlbumDetail extends React.Component {
  onPressBuyNow(url, name) {
    alert(name);
    Linking.openURL(url);
  }
  render() {
    const { viewStyle, imageViewStyle, titleStyle, buttonStyle } = styles;
    const { thumbnail_image, title, artist, image } = this.props.album;
    return (
      <Card>
        <CardSection>
          <View style={imageViewStyle}>
            <Image style={{ width: 80, height: 80 }} source={{ uri: thumbnail_image }} />
          </View>
          <View style={viewStyle}>
            <Text style={titleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <TouchableOpacity style={{ flex: 1, alignSelf: "stretch" }}>
            <Image style={{ height: 300, width: null, flex: 1 }} source={{ uri: image }} />
          </TouchableOpacity>
        </CardSection>
        <View style={buttonStyle}>
          <Button onPress={(url, name) => this.onPressBuyNow(this.props.album.url, "vishal")} title="Buy Now" />
        </View>
      </Card>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10
  },
  imageViewStyle: {
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 20
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "blue",
    backgroundColor: "#fff"
  }
};

export default AlbumDetail;
