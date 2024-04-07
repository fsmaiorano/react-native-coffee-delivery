import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flex: 2,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  footer: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },
});
