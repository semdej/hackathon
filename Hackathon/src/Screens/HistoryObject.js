import { WebView } from "react-native-webview";
import React from "react";
import { HeaderHistoryInfo } from "../../Components/HeaderHistoryInfo";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import StarRating from "react-native-star-rating";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";

const HistoryObject = ({ route }) => {
  const { marker } = route.params;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HistoryInfo", { marker });
  };

  const openARView = () => {
    Linking.openURL(marker.arviewuri); // Replace "https://example.com" with your desired AR view URL
  };

  return (
    <>
      <HeaderHistoryInfo
        picture={marker.picture}
        title={marker.name}
        description="Statue"
      />
      <View style={styles.container}>
        {/* WebView */}
        <WebView
          source={{
            uri: marker.uri,
          }}
          style={styles.webview}
          forceDarkOn={true}
        />
        {/* Overlay Container */}
        <View style={styles.overlayContainer}>
          {/* Grid */}
          <View style={styles.gridContainer}>
            <Text style={styles.title}>{marker.name}</Text>
            <Text style={styles.description}>{marker.shortdesc}</Text>
            <Text style={styles.description}> </Text>
            {/* RATING STARS */}
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                {" "}
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={marker.rating}
                  starSize={32}
                  fullStarColor="#971EFD"
                />
              </Text>
              {/* Lees meer arrow right icon button */}
              <TouchableOpacity
                onPress={handlePress}
                style={styles.leesMeerContainer}
              >
                <Text style={styles.leesMeerText}>Lees meer</Text>
                <Icon name="arrow-right" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Open AR View button */}
        <TouchableOpacity
          onPress={openARView}
          style={styles.openARViewContainer}
        >
          <Text style={styles.openARViewText}>Open AR View</Text>
          <Icon name="external-link" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
    opacity: 0.6,
  },
  gridContainer: {
    backgroundColor: "transparent", // Transparent background for the grid
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    marginRight: 10,
  },
  leesMeerContainer: {
    backgroundColor: "#971EFD",
    borderRadius: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  leesMeerText: {
    color: "white",
    paddingRight: 5,
  },
  openARViewContainer: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    right: 10, // Adjust the right position as needed
    backgroundColor: "#000", // Blue color for the Open AR View button
    borderRadius: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  openARViewText: {
    color: "white",
    paddingRight: 5,
  },
});

export default HistoryObject;
