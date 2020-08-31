import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHButton from "../components/CustomHButton";

const PlacesListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlacesListScreen;
