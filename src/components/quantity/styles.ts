import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#000",
    width: 305,
    height: 50,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    backgroundColor: THEME.COLORS.GREY_300,
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
  actionContainer: {
    width: 180,

    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PURPLE_700,
  },
  actionButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  action: {
    fontSize: 20,
  },
});
