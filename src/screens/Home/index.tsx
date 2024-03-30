import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    </>
  );
}
