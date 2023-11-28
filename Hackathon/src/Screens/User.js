import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { HeaderUser } from "../../Components/HeaderUser";

const User = () => {
  return (
    <View>
      <HeaderUser />
      <ScrollView>
        <View>
          <Image
            style={styles.profilepic}
            source={require("../../assets/profilepic.png")}
          />
          <Text style={styles.name}>Luuk Vink</Text>
          <Text style={styles.bio}>Bio</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.statstitle}>Owned History</Text>
          <Text style={styles.statstitle}>Owned History</Text>
          <Text style={styles.statstitle}>Owned History</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.statsnumber}>13</Text>
          <Text style={styles.statsnumber}>34</Text>
          <Text style={styles.statsnumber}>43</Text>
        </View>
        <View style={styles.projectgrid}>
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
          <Image
            style={styles.projectcard}
            source={require("../../assets/image.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profilepic: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    alignSelf: "center",
    color: "#ffff",
    fontWeight: "bold",
  },
  bio: {
    marginTop: 10,
    fontSize: 17,
    alignSelf: "center",
    color: "#ffff",
    opacity: 0.8,
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  statstitle: {
    fontSize: 13,
    color: "#ffff",
    opacity: 0.8,
    marginHorizontal: 20,
  },
  statsnumber: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
    marginHorizontal: 53,
    marginTop: -8,
  },
  projectgrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  projectcard: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default User;
