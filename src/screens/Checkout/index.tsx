import { useRoute } from "@react-navigation/native";
import { View, Text, StatusBar, ScrollView } from "react-native";
import type { Coffee } from "../../context/AppContext";
import { THEME } from "../../styles/theme";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={THEME.COLORS.GREY_100}
      />
      <ScrollView>
        <View>
          <Text>Checkout</Text>
          {cartItems.map((item) => (
            <View key={item.coffee.id}>
              <Text>{item.coffee.title}</Text>
              <Text>{item.size}</Text>
              <Text>{item.quantity}</Text>
            </View>
          ))}
        
        </View>
      </ScrollView>
    </>
  );
}
