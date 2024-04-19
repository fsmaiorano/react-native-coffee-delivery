import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 2,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  footer: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
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
    flex: 1,
    margin: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: THEME.COLORS.GREY_900,
  },
  coffeeImage: {
    width: "100%",
    height: "100%",
  },
  coffeeTitle: {
    fontSize: 26,
    lineHeight: 70,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
  },
  coffeePriceWrapper: {
    flexDirection: "row",
    backgroundColor: THEME.COLORS.GREY_900,
    textAlign: "justify"
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
