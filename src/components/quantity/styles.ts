import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: '40%',
  },
  actionContainer: {
    width: '60%',
  },
  quantityButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
  },
  actionButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  action: {
    fontSize: 20,
  },
});
