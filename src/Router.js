import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import FlexBasics from "./components/FlexBasics";
import FlexBasicsOne from "./components/FlexBasicsOne";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="flexbasics"
          title="FlexBasics"
          component={LoginForm}
          initial
        />
        <Scene key="login" title="Login" component={LoginForm} />
        <Scene
          key="employeeList"
          title="Employees"
          component={EmployeeList}
          backTitle=" "
          headerBackTitle=" "
          renderBackButton={() => null}
          rightTitle="Add"
          onRight={() => {
            console.log("right");
          }}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
