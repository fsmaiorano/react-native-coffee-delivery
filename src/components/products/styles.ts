import { Platform, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const top = Platform.OS === "ios" ? 340 : 320;
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: top,
  },
  title: {
    color: THEME.COLORS.GREY_900,
    fontSize: THEME.SIZES.FONT.LARGE,
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
  },

  coffeeTag: {
    width: 85,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: THEME.COLORS.PURPLE_300,
    marginRight: 8,
  },
  coffeeTagText: {
    fontSize: 10,
    fontWeight: "bold",
    color: THEME.COLORS.PURPLE_700,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  },
});
