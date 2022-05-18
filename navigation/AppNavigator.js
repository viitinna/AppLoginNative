import { createAppContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import MyappScreen from "../screens/MyappScreen";

const AppNavigator = createBottomTabNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Login"
        }
    },

    Myapp: {
        screen: MyappScreen,
        navigationOptions: {
            title: "Myapp"
        }
    },
})

export default createAppContainer(AppNavigator)
