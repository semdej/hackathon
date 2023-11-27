import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Header } from "../../Components/Header";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const Home = () => {
  const [region, setRegion] = useState({
    latitude: 51.924419,
    longitude: 4.477733,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...region,
        latitudeDelta: region.latitudeDelta / 2,
        longitudeDelta: region.longitudeDelta / 2,
      });
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...region,
        latitudeDelta: region.latitudeDelta * 2,
        longitudeDelta: region.longitudeDelta * 2,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{ latitude: 51.924419, longitude: 4.477733 }}
          title="Monument"
        >
          <Image
            source={require("../../assets/mon.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>

        {/* Zoom buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleZoomIn}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleZoomOut}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
});

export default Home;
