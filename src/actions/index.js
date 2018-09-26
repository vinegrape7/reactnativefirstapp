import * as types from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const selectLibrary = libraryId => {
  return {
    type: "select_library",
    payload: libraryId
  };
};

export const emailChanged = text => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user });
        Actions.employeeList();
      })
      .catch(error => {
        let errorMessage = "Authentication Failed: " + error.message;
        dispatch({ type: types.LOGIN_USER_FAIL, payload: errorMessage });
      });
  };
};
