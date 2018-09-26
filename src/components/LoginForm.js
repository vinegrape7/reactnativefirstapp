import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import CardSection from "./cardsection";
import Card from "./card";
import Spinner from "./Spinner";
import * as actions from "../actions/";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  state = {
    error: "",
    isLoading: false
  };
  onLoginPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  onEmailChange = email => {
    this.props.emailChanged(email);
  };

  onPasswordChange = password => {
    this.props.passwordChanged(password);
  };

  render() {
    const { viewStyle } = styles;
    let loadingHtml = null;

    if (this.props.loading) {
      loadingHtml = <Spinner />;
    } else {
      loadingHtml = <Button title="Log In" onPress={this.onLoginPress} />;
    }
    return (
      <View style={viewStyle}>
        {this.props.error.length > 0 && (
          <Text style={{ color: "red" }}>{this.props.error}</Text>
        )}
        <Card style={viewStyle}>
          <CardSection>
            <TextInput
              value={this.props.email}
              onChangeText={username => this.onEmailChange(username)}
              placeholder="username"
              style={{ height: 50, width: 400 }}
            />
          </CardSection>
          <CardSection>
            <TextInput
              secureTextEntry
              autoCorrect={false}
              value={this.props.password}
              onChangeText={password => this.onPasswordChange(password)}
              placeholder="password"
              style={{ height: 50, width: 400 }}
            />
          </CardSection>
          <CardSection>{loadingHtml}</CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    color: "#000"
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
