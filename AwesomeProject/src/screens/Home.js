import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationCards from "../components/NavigationCards";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <NavigationCards navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040404",
    alignItems: "center",
    justifyContent: "top",
  },
});

export default Home;
