import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";

export const HeaderIcon = props => (
  <HeaderButton
    {...props}
    iconSize={24}
    color={"#000"}
    IconComponent={FontAwesome}
  />
);
