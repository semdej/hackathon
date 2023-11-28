import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Header } from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const Home = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 51.924419,
    longitude: 4.477733,
    latitudeDelta: 0.03,
    longitudeDelta: 0.04,
  });

  const mapRef = useRef(null);

  const handlePress = () => {
    navigation.navigate("HistoryObject");
  };

  const handlePress2 = () => {
    navigation.navigate("HistoryObject2");
  };

  const handlePress3 = () => {
    navigation.navigate("HistoryObject3");
  };

  const handlePress4 = () => {
    navigation.navigate("HistoryObject4");
  };

  return (
    <View style={styles.container}>
      <Header />

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: 51.91802668702963,
            longitude: 4.4771170600938115,
          }}
          onPress={handlePress}
        >
          <Image
            source={require("../../assets/fikkie.png")}
            style={{ width: 45, height: 45 }}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: 51.91769871607547,
            longitude: 4.483152977853577,
          }}
          onPress={handlePress2}
        >
          <Image
            source={require("../../assets/verwoestestad.png")}
            style={{ width: 45, height: 45 }}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: 51.91781441782521,
            longitude: 4.472232577522801,
          }}
          onPress={handlePress3}
        >
          <Image
            source={require("../../assets/afscheid.png")}
            style={{ width: 45, height: 45 }}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: 51.91052551736048,
            longitude: 4.497870726309459,
          }}
          onPress={handlePress4}
        >
          <Image
            source={require("../../assets/lodwijk.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Home;
