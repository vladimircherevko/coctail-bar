import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  SectionList
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderIcon } from "../components/HeaderIcon";
import { getFilters, getDrinks, nextCategory } from "../store/actions";
import { DrinkItem } from "../components/DrinkItem";
import { THEME } from "../theme";

export function MainScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilters());
  }, []);

  const {
    drinks,
    error,
    filters: { selectCategoryIndex, activeFilters }
  } = useSelector(state => state);

  let category =
    selectCategoryIndex < 0 ? "" : activeFilters[selectCategoryIndex];

  useEffect(() => {
    if (category === "" || drinks.some(item => item.title === category)) return;
    dispatch(getDrinks(category));
  }, [category, drinks]);

  const handleEnd = () => {
    dispatch(nextCategory());
  };

  useEffect(() => {
    navigation.setParams({ error: !!error });
  }, [error]);

  if (error) {
    return (
      <View style={[styles.wrap, styles.errWrap]}>
        <Text style={styles.errText}>{error}</Text>
        <Text style={styles.errText}>Restart your app.</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      <SectionList
        sections={drinks}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => <DrinkItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerWrap}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        onEndReached={handleEnd}
        onEndReachedThreshold={0.0001}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <ActivityIndicator color={THEME.MAIN_TEXT_COLOR} />
          </View>
        }
        ListFooterComponent={<View style={styles.listEnd} />}
        initialNumToRender={20}
      />
    </View>
  );
}

MainScreen.navigationOptions = ({ navigation }) => {
  const error = navigation.getParam("error");
  if (error)
    return {
      headerTitle: "Error",
      headerStyle: {
        backgroundColor: THEME.DANGER_COLOR
      },
      headerTintColor: THEME.DANGER_TEXT_COLOR
    };
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="Filter"
          iconName="filter"
          onPress={() => navigation.navigate("Filter")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 17,
    backgroundColor: "#fff"
  },
  errWrap: {
    justifyContent: "center",
    alignItems: "center"
  },
  listEnd: {
    width: "100%",
    height: 40
  },
  headerWrap: {
    paddingTop: 10
  },
  headerText: {
    color: THEME.MAIN_TEXT_COLOR
  },
  emptyWrap: {
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  errText: {
    fontSize: 40,
    fontWeight: "bold"
  }
});
