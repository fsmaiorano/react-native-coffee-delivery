import { Platform, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const top = Platform.OS === "ios" ? 340 : 320;
export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 10,

    padding: 10,
    backgroundColor: THEME.COLORS.GREY_300,
    borderWidth: 0.5,
    borderColor: THEME.COLORS.GREY_500,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,

    marginVertical: 30,
  },
  imageWrapper: {
    width: 110,
  },
  contentWrapper: {
    width: 200,
    marginLeft: 15,
    alignItems: "flex-start",
  },
  coffeeImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginTop: -50,
  },
  coffeeTitle: {
    fontSize: THEME.SIZES.FONT.LARGE,
    color: THEME.COLORS.GREY_800,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    lineHeight: 25,
  },
  coffeeDescription: {
    fontSize: THEME.SIZES.FONT.MEDIUM,
    color: THEME.COLORS.GREY_600,
    textAlign: "justify",
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
  },
  coffeValuePrefix: {
    color: THEME.COLORS.YELLOW_700,
    textAlign: "left",
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
    fontSize: THEME.SIZES.FONT.MEDIUM,
  },
  coffeeValue: {
    color: THEME.COLORS.YELLOW_700,
    textAlign: "left",
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.FONT.XLARGE,
  },
});
