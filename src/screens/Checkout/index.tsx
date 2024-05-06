import { useRoute } from "@react-navigation/native";
import { View, Text, StatusBar } from "react-native";
import type { Coffee } from "../../context/AppContext";
import { THEME } from "../../styles/theme";

export function Checkout() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={THEME.COLORS.GREY_100}
      />
      <View>
        <Text>Checkout!!</Text>
      </View>
    </>
  );
}
