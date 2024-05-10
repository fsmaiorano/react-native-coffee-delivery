import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_300,
    borderTopColor: THEME.COLORS.GREY_300,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 32,
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: 32,
    color: THEME.COLORS.GREY_800,
    width: 215,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSize: {
    fontSize: 18,
    color: THEME.COLORS.GREY_600,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_300,
    width: 115,
  },
  quantityButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  trashButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.GREY_100,
    marginLeft: 30,
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
