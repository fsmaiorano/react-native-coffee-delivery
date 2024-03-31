import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 220,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    position: "absolute",
    top: "40%",
  },
  coffeeContainer: {
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
    margin: 8,
  },
  coffeeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -45,
  },
  coffeeContainerTag: {
    width: 100,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: THEME.COLORS.PURPLE_500,
  },
  coffeeTag: {
    fontSize: 10,
    marginTop: 10,
    color: THEME.COLORS.PURPLE_700,
  },
  coffeeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  coffeeValue: {
    fontSize: 14,
  },
});
