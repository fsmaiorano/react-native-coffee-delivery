import { Platform, StyleSheet } from "react-native";

const top = Platform.OS === "ios" ? 340 : 320;
export const styles = StyleSheet.create({
  // coffeeTag: {
  //   width: 85,
  //   height: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 50,
  //   backgroundColor: THEME.COLORS.PURPLE_300,
  //   marginRight: 8,
  //   borderWidth: 0,
  //   borderColor: THEME.COLORS.PURPLE_700,
  // },
  // coffeeSelectedTag: {
  //   borderWidth: 1,
  // },
  // coffeeTagText: {
  //   fontSize: 10,
  //   fontWeight: "bold",
  //   color: THEME.COLORS.PURPLE_700,
  //   fontFamily: THEME.FONTS.ROBOTO_BOLD,
  // },
});
