import { Text, View, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export function HeaderHistoryInfo2() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    SuperMario: require("../assets/fonts/SuperMario.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.Header}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Image
          source={require("../assets/verwoestestad.png")}
          style={styles.img}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            De verwoeste stad
          </Text>
          <Text style={{ marginLeft: 20, color: "#b5b5b5" }}>Statue</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={() => navigation.navigate("HistoryObject2")}
            name="arrow-right"
            size={20}
            color="white"
            style={styles.icon}
          />
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
    paddingTop: 23,
    alignItems: "center",
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
  img: {
    width: 70,
    height: 70,
    marginLeft: 20,
  },
});
