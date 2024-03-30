import { Platform, StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

const height = Platform.OS === "ios" ? 110 : 70;
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: height,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  text: {
    color: THEME.COLORS.WHITE,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
