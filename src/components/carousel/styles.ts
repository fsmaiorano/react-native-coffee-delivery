import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  coffeeContainer: {
    alignItems: "center",
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
