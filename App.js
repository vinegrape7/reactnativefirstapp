import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
import { ScrollView } from "react-native-gesture-handler";
import LoginForm from "./src/components/LoginForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import LibraryList from "./src/components/LibraryList";
import ReduxThunk from "redux-thunk";
import RouterComponent from "./src/Router";
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD70vc4dBnIV-qPi0oOIrI8WY-08qDNz9k",
      authDomain: "reactnative-a0f8a.firebaseapp.com",
      databaseURL: "https://reactnative-a0f8a.firebaseio.com",
      projectId: "reactnative-a0f8a",
      storageBucket: "reactnative-a0f8a.appspot.com",
      messagingSenderId: "765920352964"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }
  logOut = () => {
    firebase.auth().signOut();
  };
  renderContent() {
    if (this.state.isLoggedIn) {
      return (
        <View>
          <LibraryList />
          <Button onPress={this.logOut} title="Log Out" />
        </View>
      );
    }
    return <LoginForm />;
  }
  render() {
    return (
      <Provider store={store}>
        {/* <View style={{ marginTop: 100 }}>{this.renderContent()}</View> */}
        <RouterComponent />
      </Provider>
      // <View style={{ flex: 1 }}>
      //   <Header title="Albums" />
      //   <ScrollView>
      //     <AlbumList />
      //   </ScrollView>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
