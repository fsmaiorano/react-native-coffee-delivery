import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_300,
    borderTopColor: THEME.COLORS.GREY_300,
    justifyContent: "space-between",
    padding: 16,
  },
  cardImageWrapper: {
    width: "20%",
    height: 100,
  },
  cardContentWrapper: {
    alignItems: "flex-start",
    width: "45%",
  },
  actionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "80%",
  },
  cardPriceWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 6,
    width: "20%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 32,
    color: THEME.COLORS.GREY_800,
    width: 215,
  },
  cardSize: {
    fontSize: 14,
    color: THEME.COLORS.GREY_600,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_300,
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
    backgroundColor: THEME.COLORS.GREY_300,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_300,
  },
  quantityButtonText: {
    fontSize: 35,
    fontWeight: "300",
    color: THEME.COLORS.PURPLE_500,
  },
  quantity: {
    fontSize: 20,
  },
  swipeableContainer: {
    width: "100%",
  },
  swipeableRemove: {
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});
