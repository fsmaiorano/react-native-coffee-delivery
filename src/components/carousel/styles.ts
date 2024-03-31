import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    position: "absolute",
    top: 325,
  },
  coffeeContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "blue",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    justifyContent: "space-between",
    width: 150,
    margin: 8,
  },
  coffeeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  coffeeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  coffeeValue: {
    fontSize: 14,
  },
});
