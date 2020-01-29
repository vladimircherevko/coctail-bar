import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { MainScreen } from "./MainScreen";
import { FilterScreen } from "./FilterScreen";

const navOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 70
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};

const MainNavigator = createStackNavigator(
  {
    Drinks: MainScreen,
    Filter: FilterScreen
  },
  navOptions
);

export const AppNavigation = createAppContainer(MainNavigator);
