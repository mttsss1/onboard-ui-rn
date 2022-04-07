import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Onboard } from "../screens/Onboard";

const {Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Screen
      name="Onboard"
      component={Onboard}
      />
    </Navigator>
  )
}