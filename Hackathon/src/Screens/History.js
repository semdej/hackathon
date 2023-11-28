import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { HeaderHistory } from "../../Components/HeaderHistory";
import { HistoryCard } from "../../Components/HistoryCard";

const History = () => {
  return (
    <View>
      <HeaderHistory />
      <ScrollView>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
