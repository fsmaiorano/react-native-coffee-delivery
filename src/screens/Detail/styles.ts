import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: THEME.COLORS.WHITE,
  },
  header: {
    height: "70%",
    backgroundColor: THEME.COLORS.GREY_900,
  },
  footer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 60,
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
    justifyContent: "center",
    alignItems: "center",
  },
  coffeeImage: {
    width: 300,
    height: 300,
    transform: [{ translateY: -1050 }],
  },
  coffeeTitle: {
    fontSize: THEME.SIZES.FONT.XXLARGE,
    lineHeight: 70,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
  },
  coffeeDescription: {
    marginLeft: 14,
    marginRight: 14,
    fontSize: THEME.SIZES.FONT.LARGE,
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
    fontSize: 20,
    color: THEME.COLORS.GREY_800,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    marginBottom: 10,
  },
});

//
// coffeeTag: {
//     width: 85,
//         height: 30,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         backgroundColor: THEME.COLORS.PURPLE_300,
//         marginRight: 8,
//         borderWidth: 0,
//         borderColor: THEME.COLORS.PURPLE_700,
// },
// coffeeSelectedTag: {
//     borderWidth: 1,
// },
// coffeeTagText: {
//     fontSize: 10,
//         fontWeight: "bold",
//         color: THEME.COLORS.PURPLE_700,
//         fontFamily: THEME.FONTS.ROBOTO_BOLD,
// },
