import { WebView } from "react-native-webview";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderUser } from "../../Components/HeaderUser";

const ShoppingInfo = () => {
  return (
    <>
      <HeaderUser />
      <WebView
        source={{
          uri: "https://360fabriek.nl/usdzfiles/GemRDam/index.php?file=Fikkie",
        }}
        style={{ flex: 1 }}
      />
    </>
  );
};

export default ShoppingInfo;
