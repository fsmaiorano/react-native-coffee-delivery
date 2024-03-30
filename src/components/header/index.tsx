import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
}
