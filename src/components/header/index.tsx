import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={[styles.actions, {}]}>
        <MapPin weight="fill" size={32} color={THEME.COLORS.PURPLE_700} />
        <Text style={[styles.text, { marginLeft: 10 }]}>Lisboa, LIS</Text>
      </View>
      <Pressable
        style={[styles.actions, {}]}
        onPress={() => navigation.navigate("checkout")}
      >
        <ShoppingCart weight="fill" size={32} color={THEME.COLORS.YELLOW_700} />
      </Pressable>
    </View>
  );
}
