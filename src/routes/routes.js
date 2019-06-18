import { createStackNavigator, createAppContainer } from "react-navigation";

import TableView from "../views/TableView";
import HomeView from "../views/HomeView";

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

export default createAppContainer(AppNavigator);
