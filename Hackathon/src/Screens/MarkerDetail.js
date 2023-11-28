import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MarkerDetail = ({ route }) => {
  const { marker } = route.params;

  return (
    <View style={styles.textcontainer}>
      <Text style={styles.text}>Name: {marker.name}</Text>
      <Text style={styles.text}>Description: {marker.description}</Text>
      {/* Display other marker details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default MarkerDetail;
