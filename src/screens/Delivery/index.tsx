import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const deliveryImage = "../../assets/delivery.png";

export function Delivery() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <Image source={require(deliveryImage)} style={styles.deliveryImage} />
      <Text style={styles.title}>UHU! Pedido confirmado</Text>
      <Text style={styles.text}>Agora é só aguardar que logo o café</Text>
      <Text style={styles.text}>chegará até você!</Text>
      <TouchableOpacity style={styles.button} onPress={() => goToHome()}>
        <Text style={styles.buttonText}>Ir para a home</Text>
      </TouchableOpacity>
    </View>
  );
}
