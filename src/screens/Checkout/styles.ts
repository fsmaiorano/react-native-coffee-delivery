import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_100,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_300,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 115,
  },
  quantityButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 35,
    fontWeight: "300",
    color: THEME.COLORS.PURPLE_500,
  },
  quantity: {
    fontSize: 20,
  },
});
