import React from "react";
import WelcomePage from "../screens/WelcomePage";
import Numbers from "../screens/Numbers";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="Numbers" component={Numbers} />
    </Stack.Navigator>
  );
};

export default RootStack;
