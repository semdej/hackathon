import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export function Footer() {
  return (
    <>
      <View style={styles.Footer}>
        <Icon style={styles.Icon} color="#ffff" name="home" size={30} />
        <Icon style={styles.Icon} color="#ffff" name="book-open" size={30} />
        <Icon style={styles.Icon} color="#ffff" name="camera" size={30} />
        <Icon
          style={styles.Icon}
          color="#ffff"
          name="shopping-cart"
          size={30}
        />
        <Icon style={styles.Icon} color="#ffff" name="user" size={30} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#971EFD",
    maxHeight: 120,
    padding: 30,
    marginTop: "auto",
  },
  Icon: {
    paddingBottom: 40,
  },
});
