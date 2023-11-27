import { Text, View, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";

// Updated styles for icons
const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#971EFD",
    height: 150,
    opacity: 0.8,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export function HeaderHistory() {
  const [fontsLoaded] = useFonts({
    SuperMario: require("../assets/fonts/SuperMario.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.Header}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              marginTop: 50,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "white",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              Owned History
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginLeft: 20, color: "#b5b5b5" }}>
              Keep / Sell
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="search" size={20} color="white" style={styles.icon} />
          <Icon name="sliders" size={20} color="white" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}
