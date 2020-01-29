import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { THEME } from "../theme";

export const DrinkItem = ({ item }) => (
  <View style={styles.wrap}>
    <Image
      style={styles.img}
      source={{ uri: item.strDrinkThumb + "/preview" }}
    />
    <Text style={styles.text}>{item.strDrink}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: THEME.MAIN_VERT_PADDING
  },
  img: {
    width: 65,
    height: 65
  },
  text: {
    marginLeft: THEME.MAIN_VERT_PADDING,
    fontSize: THEME.MAIN_TEXT_SIZE,
    color: THEME.MAIN_TEXT_COLOR
  }
});
