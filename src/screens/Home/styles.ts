import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    marginTop: 50,
    color: THEME.COLORS.WHITE,
    fontSize: THEME.SIZES.FONT.LARGE,
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
  },
  searchSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.GREY_700,
    color: THEME.COLORS.WHITE,
    padding: 10,
  },
  searchIcon: {
    padding: 0,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: THEME.COLORS.GREY_700,
    color: THEME.COLORS.GREY_300,
  },
});
