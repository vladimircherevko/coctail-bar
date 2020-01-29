import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { THEME } from "../theme";

export const FilterItem = ({ filter, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(filter)} activeOpacity={0.5}>
      <View style={styles.wrap}>
        <Text style={styles.text}>{filter.strCategory}</Text>
        <Feather
          name="check"
          size={25}
          color={filter.active ? "#303030" : "#fff"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: THEME.MAIN_VERT_PADDING
  },
  text: {
    color: THEME.MAIN_TEXT_COLOR,
    fontSize: THEME.MAIN_TEXT_SIZE
  }
});
