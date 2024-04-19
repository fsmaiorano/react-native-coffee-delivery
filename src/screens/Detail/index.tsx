import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Coffee } from "../../context/AppContext";
import { styles } from "./styles";

interface Params {
  coffee: Coffee;
}

export function Detail() {
  const route = useRoute();
  const { coffee } = route.params as Params;
  const handlePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          {coffee.tags &&
            coffee.tags.map((tag, index) => (
              <View key={index}>
                <Text>{tag}</Text>
              </View>
            ))}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text>dsadsa</Text>
      </View>
      {/* <Image
        source={imageMapper[coffee.imageSrc as keyof typeof imageMapper]}
      />
      <Text>{coffee.title}</Text>
      <Text>{coffee.description}</Text>
      <Text>
        <Text>R$ </Text>
        <Text>{handlePrice(coffee.value)}</Text>
      </Text> */}
    </View>
  );
}
