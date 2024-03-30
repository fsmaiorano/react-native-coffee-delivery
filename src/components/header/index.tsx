import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Animated, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Header() {
  return (
    <Animated.View style={styles.container}>
      {/* <Link to={{ screen: "home", params: { id: "" } }}>
        <Image source={logo} style={styles.logo} />
      </Link> */}
      <TouchableOpacity style={{ marginLeft: 50 }}>
        <MapPin weight="fill" size={32} color={THEME.COLORS.PURPLE_700} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 50 }}>
        <ShoppingCart
          weight="fill"
          size={32}
          color={THEME.COLORS.YELLOW_700}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
