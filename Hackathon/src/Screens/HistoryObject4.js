import { WebView } from "react-native-webview";
import React from "react";
import { HeaderUser } from "../../Components/HeaderUser";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/Feather";

const HistoryObject4 = () => {
  const openARView = () => {
    Linking.openURL("https://360fabriek.nl/usdzfiles/GemRDam/HetAfscheid.usdz");
  };
  return (
    <>
      <HeaderUser />
      <View style={styles.container}>
        {/* WebView */}
        <WebView
          source={{
            uri: "https://sketchfab.com/models/61e4208d386641a4afdc2bd193390cda/embed?camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0",
          }}
          style={styles.webview}
          forceDarkOn={true}
        />
        {/* Overlay Container */}
        <View style={styles.overlayContainer}>
          {/* Grid */}
          <View style={styles.gridContainer}>
            <Text style={styles.title}>Lodewijk Pincoffs</Text>
            <Text style={styles.description}>
              DescriptionDescriptionDescriptionDescriptionDescription
            </Text>
            <Text style={styles.description}>
              DescriptionDescriptionDescriptionDescription
            </Text>
            <Text style={styles.description}>
              DescriptionDescriptionDescriptionDescriptionDescription
            </Text>
            {/* RATING STARS */}
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                {" "}
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={4}
                  starSize={32}
                  fullStarColor="#971EFD"
                />
              </Text>
              {/* Lees meer arrow right icon button */}
              <View style={styles.leesMeerContainer}>
                <Text style={styles.leesMeerText}>Lees meer</Text>
                <Icon name="arrow-right" size={20} color="white" />
              </View>
            </View>
          </View>
        </View>
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
    backgroundColor: "transparent", // Make the overlay container transparent
    padding: 10,
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
    backgroundColor: "#2196F3", // Blue color for the Open AR View button
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

export default HistoryObject4;
