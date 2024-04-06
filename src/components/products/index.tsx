import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const imageMapper = {
  "tradicional-express": require("../../assets/coffees/tradicional-express.png"),
  "american-express": require("../../assets/coffees/american-express.png"),
  "creamy-express": require("../../assets/coffees/creamy-express.png"),
  "ice-express": require("../../assets/coffees/ice-express.png"),
  "coffee-with-milk": require("../../assets/coffees/coffee-with-milk.png"),
  "capuccino-coffee": require("../../assets/coffees/capuccino-coffee.png"),
  "macchiato-coffee": require("../../assets/coffees/macchiato-coffee.png"),
  "mocaccino-coffee": require("../../assets/coffees/mocaccino-coffee.png"),
  "hot-chocolate": require("../../assets/coffees/hot-chocolate.png"),
  "cuban-coffee": require("../../assets/coffees/cuban-coffee.png"),
  "hawaiian-coffee": require("../../assets/coffees/hawaiian-coffee.png"),
  "arabian-coffee": require("../../assets/coffees/arabian-coffee.png"),
  "irish-coffee": require("../../assets/coffees/irish-coffee.png"),
  "latte-coffee": require("../../assets/coffees/latte-coffee.png"),
};

export function Products() {
  const { coffees, filteredCoffees } = useContext(AppContext);
  const handlePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  return (
    <View style={styles.container}>
      {(filteredCoffees?.length ? filteredCoffees : coffees).map((coffee) => (
        <View key={coffee.id} style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              source={imageMapper[coffee.imageSrc as keyof typeof imageMapper]}
              style={styles.coffeeImage}
            />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.coffeeTitle}>{coffee.title}</Text>
            <Text style={styles.coffeeDescription}>{coffee.description}</Text>
            <Text>
              <Text style={styles.coffeValuePrefix}>R$ </Text>
              <Text style={styles.coffeeValue}>
                {handlePrice(coffee.value)}
              </Text>
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
