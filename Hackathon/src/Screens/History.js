import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { HeaderHistory } from "../../Components/HeaderHistory";

const History = () => {
  return (
    <View>
      <HeaderHistory />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image
              source={require("../../assets/verwoestestad.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>

          <View style={styles.centerContainer}>
            <Text style={styles.boldText}>De Verwoeste Stad</Text>
            <Text style={styles.text}>$4512</Text>
          </View>
          <View style={styles.rightContainerSell}>
            <View style={styles.sellContainer}>
              <Text style={styles.sellText}>Sell</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>1/100</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image
              source={require("../../assets/lodwijk.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>

          <View style={styles.centerContainer}>
            <Text style={styles.boldText}>Lodewijk Pincoffs</Text>
            <Text style={styles.text}>$1232</Text>
          </View>
          <View style={styles.rightContainerSell}>
            <View style={styles.sellContainer}>
              <Text style={styles.sellText}>Sell</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>5/100</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#212121",
    height: 110,
    opacity: 0.8,
    marginLeft: 23,
    marginRight: 23,
    marginTop: 23,
    borderRadius: 13,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  centerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "left",
    paddingLeft: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  rightContainerSell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 0,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingLeft: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 18,
    color: "#b5b5b5",
    paddingLeft: 10,
  },
  dateContainer: {
    backgroundColor: "#333333",

    padding: 5,
    borderRadius: 5,
    marginRight: 0,
  },
  dateText: {
    color: "white",
    padding: 5,
  },

  sellContainer: {
    backgroundColor: "#bf3737",

    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  sellText: {
    color: "white",
    padding: 5,
  },
});
