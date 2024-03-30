import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      {/* <Link to={{ screen: "home", params: { id: "" } }}>
        <Text style={styles.text}>Home</Text>
      </Link> */}
      <View style={[styles.actions, { marginLeft: 40 }]}>
        <MapPin weight="fill" size={32} color={THEME.COLORS.PURPLE_700} />
        <Text style={[styles.text, { marginLeft: 10 }]}>Lisboa, LIS</Text>
      </View>
      <TouchableOpacity style={[styles.actions, { marginRight: 40 }]}>
        <ShoppingCart weight="fill" size={32} color={THEME.COLORS.YELLOW_700} />
      </TouchableOpacity>
    </View>
  );
}
