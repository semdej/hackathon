import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Header } from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { supabase } from "../../Components/Supabase";

const Home = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 51.924419,
    longitude: 4.477733,
    latitudeDelta: 0.03,
    longitudeDelta: 0.04,
  });

  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const { data, error } = await supabase.from("buildings").select("*");

        if (error) {
          console.error("Error fetching markers:", error);
          return;
        }

        setMarkers(data);
      } catch (error) {
        console.error("Error fetching markers:", error.message);
      }
    };

    fetchMarkers();
  }, []);

  const handleMarkerPress = (marker) => {
    navigation.navigate("HistoryObject", { marker });
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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={() => handleMarkerPress(marker)}
          >
            <Image
              source={{ uri: marker.picture }}
              style={{ width: 45, height: 45 }}
            />
          </Marker>
        ))}
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
