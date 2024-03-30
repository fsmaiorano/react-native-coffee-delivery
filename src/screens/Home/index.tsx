import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
}
