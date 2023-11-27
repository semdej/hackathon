import { Text, View, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";

export function HeaderUser() {
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
              Luuk Vink
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginLeft: 20, color: "#b5b5b5" }}>Luuk</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginRight: -60,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 30,
              paddingLeft: 5,
              fontFamily: "SuperMario",
            }}
          >
            {" "}
            <Image source={require("../assets/coin.png")} />
            10
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#971EFD",
    height: 150,
    opacity: 0.8,
  },
});
