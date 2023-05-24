import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator labeled = {false} barStyle = {styles.bottomTabStyle} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                var iconName
                if (route.name === "Feed") {
                    iconName = focused ? "phone-portrait" : "phone-portrait-outline"
                } else if (route.name === "CreateStory") {
                    iconName = focused ? "send" : "send-outline"
                }
                return ( <Ionicons name={iconName} size={RFValue(25)} color={color} style = {styles.icons} />)
            },
            
        })}
        
        activeColor = {"blue"}
            inactiveColor = {"green"}>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreateStory" component={CreateStory} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
});
