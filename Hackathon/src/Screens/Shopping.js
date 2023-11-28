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
          title="Museum Cadeaubon"
          imageUrl="../assets/shop.jpg"
          subtitle="t.w.v € 25,-"
          rating={5}
        />
        <ShoppingCard
          title="Biscoop Cadeaubon"
          imageUrl="../assets/shop.jpg"
          subtitle="t.w.v € 10,-"
          rating={4}
        />
      </ScrollView>
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({});
