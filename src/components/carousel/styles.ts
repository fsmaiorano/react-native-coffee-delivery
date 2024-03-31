import { Platform, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const top = Platform.OS === "ios" ? 340 : 320;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 310,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    position: "absolute",
    top: top,
  },
  coffeeContainer: {
    width: 208,
    height: 280,
    alignItems: "center",
    padding: 20,
    backgroundColor: THEME.COLORS.GREY_300,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_500,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "space-between",
    margin: 12,
  },
  coffeeImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginTop: -50,
  },
  coffeContainerTag: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 5,
  },
  coffeeTag: {
    width: 75,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: THEME.COLORS.PURPLE_300,
  },
  coffeeTagText: {
    fontSize: 10,
    fontWeight: "bold",
    color: THEME.COLORS.PURPLE_700,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  },
  coffeeTitle: {
    fontSize: THEME.SIZES.FONT.LARGE,
    color: THEME.COLORS.GREY_800,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: THEME.FONTS.BALOO2_BOLD,
  },
  coffeeDescription: {
    fontSize: 14,
    color: THEME.COLORS.GREY_600,
    textAlign: "center",
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
  },
  coffeePrice: {
    color: THEME.COLORS.YELLOW_700,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.FONT.LARGE,
  },
});
