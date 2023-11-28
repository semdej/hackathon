import { WebView } from "react-native-webview";
import React from "react";
import { HeaderHistoryInfo2 } from "../../Components/HeaderHistoryInfo2";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/Feather";

const HistoryInfo2 = () => {
  const dummyText =
    "Het imposante standbeeld De Verwoeste Stad in Rotterdam is een krachtige symbolisatie van de veerkracht en wederopbouw die de stad heeft doorgemaakt na de verpletterende impact van de Tweede Wereldoorlog. Dit kunstwerk, gecreëerd door de beeldhouwer Ossip Zadkine, spreekt tot de collectieve herinnering en vertelt het verhaal van een stad die uit haar as herrijst. Het beeld zelf is doordrenkt met symboliek, waarbij de gebroken vormen en de geprononceerde leegte het verlies en de vernietiging weergeven die Rotterdam heeft ondergaan tijdens het bombardement in mei 1940. Te midden van deze ruïnes rijst echter een opkomende figuur op, een teken van hoop en hernieuwd leven te midden van de chaos. De kunstenaar heeft met meesterlijke precisie de contrasten tussen destructie en opbouw vastgelegd, waardoor het standbeeld een krachtige emotionele impact heeft. De holte in het midden van het beeld lijkt niet alleen een fysiek gat, maar ook een symbolische leegte die gevuld moet worden met veerkracht, vastberadenheid en de wil om te herstellen. De Verwoeste Stad fungeert als een monumentale herinnering aan het verleden van Rotterdam en dient als een blijvende oproep tot solidariteit en veerkracht, een eerbetoon aan degenen die hebben bijgedragen aan de wederopbouw van de stad. Het beeld nodigt toeschouwers uit om na te denken over de kracht van gemeenschappen die samenwerken om tegenspoed te overwinnen en een betere toekomst te creëren. Met zijn prominente plaats in het Rotterdamse stadslandschap fungeert het standbeeld als een tijdloos symbool van hoop, herstel en de vastberadenheid om vooruit te gaan, zelfs te midden van de meest verwoestende tegenslagen. Het blijft een ontroerende en indrukwekkende getuigenis van de menselijke geest en de onuitputtelijke kracht van opnieuw beginnen.";

  return (
    <>
      <HeaderHistoryInfo2 />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>De verwoeste stad</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{dummyText}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "lightgray",
  },
});

export default HistoryInfo2;
