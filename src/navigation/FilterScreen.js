import React from "react";
import { View, StyleSheet, Alert, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { toggleFilter, applyFilters } from "../store/actions";
import { FilterItem } from "../components/FilterItem";

export function FilterScreen({ navigation }) {
  const dispatch = useDispatch();

  const { filters, activeFilters } = useSelector(state => state.filters);

  const handleApply = () => {
    let newActiveFilters = filters
      .filter(filter => filter.active)
      .map(filter => filter.strCategory);

    if (!newActiveFilters.length) {
      Alert.alert(
        "No selected filter",
        "You must select at least one category",
        [
          {
            text: "Cancel",
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (newActiveFilters.join("") !== activeFilters.join("")) {
      dispatch(applyFilters(newActiveFilters));
    }

    navigation.navigate("Drinks");
  };

  return (
    <View style={styles.wrap}>
      <FlatList
        data={filters}
        keyExtractor={item => item.strCategory}
        renderItem={({ item }) => (
          <FilterItem
            filter={item}
            onPress={filter => dispatch(toggleFilter(filter))}
          />
        )}
      />
      <Button title="Apply" color="#272727" onPress={handleApply} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 10,
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 30,
    backgroundColor: "#fff"
  }
});
