import { WebView } from "react-native-webview";
import React from "react";
import { HeaderHistoryInfo3 } from "../../Components/HeaderHistoryInfo3";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/Feather";

const HistoryInfo3 = () => {
  const dummyText =
    "Het Afscheid in Rotterdam is meer dan slechts een beeld; het is een emotioneel tableau dat de diepgaande complexiteit van afscheid nemen omarmt. Dit kunstwerk, gebeeldhouwd met gevoeligheid door de kunstenaar Corinne Franzen, vangt de essentie van de menselijke ervaring in momenten van loslaten en verandering. De beeltenis van een vrouw en een kind die elkaar loslaten, belichaamt de universele emoties die gepaard gaan met afscheid. De subtiele nuances in de houding van de figuren, de blik in hun ogen en de dynamiek van de sculptuur wekken een scala aan gevoelens op - van verdriet en melancholie tot hoop en acceptatie. Dit kunstwerk dient als een ontroerend eerbetoon aan de constante stroom van verandering en vertrek in ons leven. De kunstenaar heeft op meesterlijke wijze de tederheid van het moment vastgelegd, waarin liefde en loslaten elkaar ontmoeten. De sculptuur nodigt de toeschouwer uit om na te denken over de kwetsbaarheid van menselijke relaties en de onvermijdelijke reis van afscheid nemen die we allemaal doorgaan. Het Afscheid is niet alleen een artistieke expressie, maar ook een reflectie van de menselijke veerkracht. Het herinnert ons eraan dat afscheid, hoe moeilijk ook, een integraal onderdeel is van ons leven en groei mogelijk maakt. De schoonheid van de sculptuur schuilt in de subtiliteit waarmee het de complexiteit van emoties vastlegt, waardoor het een tijdloos kunstwerk wordt dat resonantie vindt bij mensen van alle achtergronden. Gelegen te midden van de levendige stad Rotterdam, fungeert Het Afscheid als een ontmoetingspunt voor contemplatie en introspectie. Het nodigt uit tot een moment van stilte te midden van de drukte van het dagelijks leven, waar men zich kan verbinden met de diepe, universele ervaring van afscheid nemen en de schoonheid ontdekken die schuilgaat in de kwetsbaarheid van het menselijk bestaan.";

  return (
    <>
      <HeaderHistoryInfo3 />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Het Afscheid</Text>
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

export default HistoryInfo3;
