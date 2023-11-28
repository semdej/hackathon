import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import StarRating from "react-native-star-rating";

export function ShoppingCard({ title, subtitle, rating, imageUrl }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.boldText}>{title}</Text>
          <Text style={styles.text}>{subtitle}</Text>
          <View style={styles.starsContainer}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              starSize={23}
              starStyle={{ color: "#971EFD", padding: 2 }}
            />
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Icon name="arrow-right" size={25} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#212121",
    height: 250,
    opacity: 0.8,
    marginLeft: 23,
    marginRight: 23,
    marginTop: 30, // Adjusted marginTop for reduced space above the card
    borderRadius: 13,
  },

  imageContainer: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    overflow: "hidden", // Clip content that overflows the borderRadius
  },
  image: {
    width: "100%",
    height: 140, // Adjusted height for better visibility
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 15, // Increased padding for better spacing
  },
  leftContainer: {
    flex: 2,
    justifyContent: "flex-start", // Align text to the top
    alignItems: "flex-start", // Align text to the left
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  starsContainer: {
    justifyContent: "center", // Center stars vertically
    alignItems: "flex-start", // Align stars to the left
    marginVertical: 5, // Adjusted margin for better spacing
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingBottom: 5,
  },
  text: {
    fontSize: 18,
    color: "#b5b5b5",
  },
});
