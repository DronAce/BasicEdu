import React from "react";
import RootStack from "./RootStack";

import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
