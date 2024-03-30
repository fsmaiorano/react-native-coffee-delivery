import { MapPin, ShoppingCart } from "phosphor-react-native";
import { View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      {/* <Link to={{ screen: "home", params: { id: "" } }}>
        <Image source={logo} style={styles.logo} />
      </Link> */}
      <MapPin weight="fill" size={22} />
      <ShoppingCart weight="fill" size={22} />
    </View>
  );
}
