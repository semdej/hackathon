import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import { HeaderShopping } from "../../Components/HeaderShopping";
import { ShoppingCard } from "../../Components/ShoppingCard";

const Shopping = () => {
  return (
    <View>
      <HeaderShopping />
      <ScrollView>
        <ShoppingCard
          title="Museum"
          imageUrl="../assets/shop.jpg"
          subtitle="sss"
          rating={4}
        />
        <ShoppingCard
          title="33"
          imageUrl="../assets/shop.jpg"
          subtitle="test"
          rating={4}
        />
      </ScrollView>
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({});
