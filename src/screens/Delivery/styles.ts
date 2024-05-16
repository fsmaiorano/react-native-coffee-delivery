import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.WHITE,
  },
  deliveryImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    color: THEME.COLORS.YELLOW_700,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    lineHeight: 32,
  },
  text: {
    fontSize: 16,
  },
  button: {
    width: "75%",
    height: 60,
    backgroundColor: THEME.COLORS.PURPLE_700,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
    justifyContent: "center",
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: 16,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    textTransform: "uppercase",
    justifyContent: "center",
    textAlign: "center",
  },
});
