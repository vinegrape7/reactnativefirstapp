import * as types from "../actions/types";

const INITIAL_STATE = {
  email: "test@test.com",
  password: "Alept123$",
  user: null,
  error: "",
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case types.LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: "", loading: false };
    case types.LOGIN_USER_FAIL:
      return { ...state, user: null, error: action.payload, loading: false };
    default:
      return state;
  }
  return null;
};
