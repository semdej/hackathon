import { Text, View, StyleSheet, Image } from "react-native";

export function HistoryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require("../assets/rondje.png")}
          style={{ width: 80, height: 80 }}
        />
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.boldText}>RONDJE</Text>
        <Text style={styles.text}>Text</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>27/11</Text>
        </View>
      </View>
    </View>
  );
}

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
    marginRight: 10,
  },
  dateText: {
    color: "white",
    padding: 5,
  },
});
