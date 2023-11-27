import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import History from "./Screens/History";
import Icon from "react-native-vector-icons/Feather";

import Shopping from "./Screens/Shopping";
import Photo from "./Screens/Photo";
import User from "./Screens/User";

const NavTheme = {
  dark: false,
  colors: {
    card: "rgb(153, 30, 253)",
  },
};

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer theme={NavTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
          tabBarStyle: styles.NavContainer,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon style={styles.Icon} name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                style={styles.Icon}
                name="book-open"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Photo"
          component={Photo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                style={styles.Icon}
                name="camera"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping"
          component={Shopping}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                style={styles.Icon}
                name="shopping-cart"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon style={styles.Icon} name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  Icon: {
    paddingBottom: 2,
  },
  NavContainer: {
    backgroundColor: "#971EFD",
    height: 100,
  },
});
