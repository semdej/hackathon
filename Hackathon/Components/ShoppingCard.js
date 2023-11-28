import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import StarRating from "react-native-star-rating";

export function ShoppingCard({ title, subtitle, rating, imageUrl }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ShoppingInfo");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
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
                fullStarColor="#971EFD"
              />
            </View>
          </View>

          <View style={styles.rightContainer}>
            <Icon name="arrow-right" size={25} color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    marginTop: 30,
    borderRadius: 13,
  },
  imageContainer: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 140,
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 15,
  },
  leftContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  starsContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 5,
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
