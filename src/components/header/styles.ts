import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: THEME.COLORS.WHITE,
  },
});
