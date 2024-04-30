import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  header: {
    height: "65%",
    backgroundColor: THEME.COLORS.GREY_900,
  },
  footer: {
    height: "30%",
    backgroundColor: THEME.COLORS.GREY_100,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 12,
    marginLeft: 12,
  },
  tag: {
    justifyContent: "center",
    alignItems: "center",
    width: 115,
    height: 30,
    marginRight: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_800,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  tagText: {
    fontSize: 14,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  },
  coffeeContainer: {
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  CoffeeImageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coffeeImage: {
    width: 320,
    height: 320,
    transform: [{ translateY: -height * 0.38 }],
  },
  smokeImage: {
    width: 100,
    height: 180,
    zIndex: 1,
    position: "absolute",
    transform: [{ translateY: -height * 0.57 }],
  },
  coffeeTitle: {
    fontSize: 26,
    lineHeight: 70,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
  },
  coffeeDescription: {
    marginLeft: 14,
    marginRight: 14,
    fontSize: THEME.SIZES.FONT.MEDIUM,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    lineHeight: 24,
  },
  coffeePriceWrapper: {
    flexDirection: "row",
    backgroundColor: THEME.COLORS.GREY_900,
    textAlign: "justify",
  },
  coffeePricePrefix: {
    color: THEME.COLORS.YELLOW_700,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    lineHeight: 75,
    marginRight: 4,
    fontSize: 20,
  },
  coffeePrice: {
    color: THEME.COLORS.YELLOW_700,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: 40,
  },
  sizeTitle: {
    paddingTop: 50,
    paddingLeft: 50,
    color: THEME.COLORS.GREY_700,
    fontSize: THEME.SIZES.FONT.MEDIUM,
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
  },
});
