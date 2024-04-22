import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  coffeeTag: {
    width: screenWidth / 4.5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: THEME.COLORS.GREY_300,
    marginLeft: 0,
    marginRight: 8,
    borderWidth: 0,
    borderColor: THEME.COLORS.PURPLE_500,
  },
  coffeeSelectedTag: {
    width: screenWidth / 4.5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: THEME.COLORS.WHITE,
    marginLeft: 0,
    marginRight: 8,
    borderWidth: 2,
    borderColor: THEME.COLORS.PURPLE_500,
  },
  coffeeTagText: {
    fontSize: THEME.SIZES.FONT.MEDIUM,
    color: THEME.COLORS.GREY_700,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
  },
  coffeeSelectedTagText: {
    fontSize: THEME.SIZES.FONT.MEDIUM,
    fontWeight: "bold",
    color: THEME.COLORS.PURPLE_500,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  },
});
