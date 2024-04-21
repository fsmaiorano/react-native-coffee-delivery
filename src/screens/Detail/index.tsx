import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Sizes } from "../../components/sizes";
import { Coffee } from "../../context/AppContext";
import { styles } from "./styles";

const coffeeImage = "../../assets/coffee.png";

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
    <>
      <View style={styles.header}>
        <View style={styles.tagContainer}>
          {coffee.tags &&
            coffee.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
        </View>
        <View style={styles.coffeeContainer}>
          <Text style={styles.coffeeTitle}>{coffee.title}</Text>
          <View style={styles.coffeePriceWrapper}>
            <Text style={styles.coffeePricePrefix}>R$</Text>
            <Text style={styles.coffeePrice}>{handlePrice(coffee.value)}</Text>
          </View>
        </View>
        <Text style={styles.coffeeDescription}>{coffee.description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.sizeTitle}>Selecione o tamanho:</Text>
        <Sizes />
      </View>
      <View style={styles.CoffeeImageWrapper}>
        <Image source={require(coffeeImage)} style={styles.coffeeImage} />
      </View>
    </>
  );
}
