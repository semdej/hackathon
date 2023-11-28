import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/Feather";

const Photo = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Photo taken:", photo);
      // You can handle the photo as needed, for example, upload it to a server
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          cameraRef.current = ref;
        }}
      >
        <View style={styles.cameraView}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={toggleCameraType}
          >
            <Text style={styles.flipText}>
              {" "}
              <Icon name="repeat" size={25} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={takePicture}
          >
            <Text style={styles.takePictureText}>
              {" "}
              <Icon name="camera" size={25} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  flipButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 15,
  },
  flipText: {
    fontSize: 18,
    color: "white",
  },
  takePictureButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 15,
  },
  takePictureText: {
    fontSize: 18,
    color: "white",
  },
});

export default Photo;
