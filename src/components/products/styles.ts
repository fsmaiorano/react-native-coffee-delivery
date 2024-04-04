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
  tag: {
    color: THEME.COLORS.GREY_900,
    fontSize: THEME.SIZES.FONT.SMALL,
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
  },
});
