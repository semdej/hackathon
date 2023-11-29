import React from "react";
import { HeaderHistoryInfo } from "../../Components/HeaderHistoryInfo";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const HistoryInfo = ({ route }) => {
  const { marker } = route.params;

  const dummyText =
    "Fikkie in Rotterdam is niet zomaar een standbeeld; het is een levendige uitdrukking van de onvoorwaardelijke band tussen mens en hond. Dit kunstwerk, dat een hond toont die zijn baasje begroet, vangt de essentie van vreugde en loyaliteit die voortvloeit uit de unieke verbondenheid tussen de inwoners van de stad en hun trouwe viervoeters. Het beeld straalt levendigheid uit door de speelse houding van de hond en de herkenbare emoties die tot uiting komen in zijn gezichtsuitdrukking. De kunstenaar heeft op meesterlijke wijze de dynamiek vastgelegd van het hartelijke welkom dat een hond biedt aan zijn menselijke metgezel, waardoor de toeschouwer wordt uitgenodigd om de warmte en oprechtheid van deze inter-specifieke relatie te voelen. Fikkie fungeert als een eerbetoon aan de alledaagse vreugde die honden brengen in het leven van mensen. Het beeld staat symbool voor de eenvoudige, maar diepgaande vreugde van het samenzijn, waarbij de loyaliteit en genegenheid van de hond het middelpunt vormen. In het hart van de stad Rotterdam herinnert dit kunstwerk aan de waarde van deze dierbare connecties te midden van de stedelijke drukte. De kunstenaar heeft niet alleen de fysieke verschijning van de hond vastgelegd, maar ook de onzichtbare band die ontstaat tussen mens en dier. Fikkie nodigt voorbijgangers uit om te reflecteren op de onbaatzuchtige liefde en de oprechte begroetingen die honden met zich meebrengen, waardoor het een verheugend tafereel wordt dat de harmonie tussen mens en natuur viert. Met zijn prominente plaats in Rotterdam dient Fikkie als een hartverwarmende herinnering aan de eenvoudige geneugten van het leven en het belang van het koesteren van de speciale banden die we delen met onze harige metgezellen. Het beeld brengt een glimlach teweeg en nodigt uit tot een moment van waardering voor de onvergetelijke momenten van geluk die onze trouwe viervoeters ons schenken.";

  return (
    <>
      <HeaderHistoryInfo
        picture={marker.picture}
        title={marker.name}
        description="Statue"
      />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{marker.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{marker.description}</Text>
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

export default HistoryInfo;
