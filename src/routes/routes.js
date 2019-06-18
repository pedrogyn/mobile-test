import { createStackNavigator, createAppContainer } from "react-navigation";

import TableView from "../views/TableView";
import HomeView from "../views/HomeView";
import InformationView from "../views/InformationView";

const AppNavigator = createStackNavigator({
  TableView: {
    screen: TableView,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  HomeView: {
    screen: HomeView
  }
});

const ModalNavigator = createStackNavigator(
  {
    AppNavigator: {
      screen: AppNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    InformationView: {
      screen: InformationView
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(ModalNavigator);
