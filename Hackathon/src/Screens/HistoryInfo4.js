import { WebView } from "react-native-webview";
import React from "react";
import { HeaderHistoryInfo4 } from "../../Components/HeaderHistoryInfo4";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/Feather";

const HistoryInfo4 = () => {
  const dummyText =
    "Lodewijk Pincoffs in Rotterdam is niet alleen een standbeeld; het is een monumentale eerbetuiging aan de visionaire ondernemer die een cruciale rol speelde in de ontwikkeling van de haven. Dit beeld, opgericht ter ere van Lodewijk Pincoffs, werpt een schijnwerper op zijn onschatbare bijdrage aan de groei en welvaart van de stad. Het standbeeld staat als een tijdloze getuigenis van Pincoffs' pioniersgeest en ondernemerschap. Zijn betrokkenheid bij de havenontwikkeling wordt treffend weerspiegeld in de statige houding van het beeld, dat niet alleen de persoonlijkheid van Pincoffs eert, maar ook de ambitie en vastberadenheid die de stad Rotterdam hebben gevormd tot de havenstad die het vandaag is. De kunstenaar heeft met aandacht voor detail het karakter en de visie van Pincoffs vastgelegd, waardoor het standbeeld niet alleen een eerbetoon is aan de man zelf, maar ook aan de erfenis die hij heeft nagelaten. Als prominent onderdeel van het stadslandschap herinnert het beeld aan de voortdurende groei en ontwikkeling die voortvloeien uit de visie van visionaire leiders zoals Pincoffs. Lodewijk Pincoffs fungeert als een brug tussen verleden en heden, waardoor voorbijgangers worden herinnerd aan de fundamenten die zijn gelegd voor de welvaart van de stad. Het beeld nodigt uit tot reflectie op de dynamiek van stadsontwikkeling en onderstreept de cruciale rol van individuen zoals Pincoffs in het vormgeven van de geschiedenis. Met zijn prominente aanwezigheid in Rotterdam dient het standbeeld als een symbolisch oriëntatiepunt, waar bewoners en bezoekers worden herinnerd aan de ondernemersgeest die heeft bijgedragen aan de stad als een bruisend knooppunt van handel en bedrijvigheid. Het belichaamt niet alleen het verleden, maar ook de voortdurende ambitie om te blijven groeien en bloeien, geïnspireerd door de erfenis van Lodewijk Pincoffs.";

  return (
    <>
      <HeaderHistoryInfo4 />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Lodewijk Pincoffs</Text>
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

export default HistoryInfo4;
