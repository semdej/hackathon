import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import History from "./Screens/History";
import Icon from "react-native-vector-icons/Feather";

import Shopping from "./Screens/Shopping";
import Photo from "./Screens/Photo";
import User from "./Screens/User";
import HistoryObject from "./Screens/HistoryObject";
import HistoryInfo from "./Screens/HistoryInfo";

const NavTheme = {
  dark: false,
  colors: {
    card: "rgb(153, 30, 253)",
    background: "#111111",
  },
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer theme={NavTheme}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "white",
            tabBarStyle: styles.NavContainer,
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon
                  style={styles.Icon}
                  name="home"
                  size={size}
                  color={color}
                />
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
                <Icon
                  style={styles.Icon}
                  name="user"
                  size={size}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="HistoryInfo"
            component={HistoryInfo}
            options={{
              tabBarButton: () => null,
            }}
          />

          <Tab.Screen
            name="HistoryObject"
            component={HistoryObject}
            options={{
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 30,
    shadowOpacity: 1,
    elevation: 4,
    backdropFilter: "blur(6.2px)",
    opacity: 0.8,
  },
});
