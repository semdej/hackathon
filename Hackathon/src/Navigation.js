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
import HistoryObject2 from "./Screens/HistoryObject2";
import HistoryObject3 from "./Screens/HistoryObject3";
import HistoryObject4 from "./Screens/HistoryObject4";
import HistoryInfo from "./Screens/HistoryInfo";
import HistoryInfo2 from "./Screens/HistoryInfo2";
import HistoryInfo3 from "./Screens/HistoryInfo3";
import HistoryInfo4 from "./Screens/HistoryInfo4";

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
            name="HistoryObject"
            component={HistoryObject}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="HistoryObject2"
            component={HistoryObject2}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="HistoryObject3"
            component={HistoryObject3}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="HistoryObject4"
            component={HistoryObject4}
            options={{
              tabBarButton: () => null,
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
            name="HistoryInfo2"
            component={HistoryInfo2}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="HistoryInfo3"
            component={HistoryInfo3}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="HistoryInfo4"
            component={HistoryInfo4}
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
