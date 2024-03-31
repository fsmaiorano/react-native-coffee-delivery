import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

import coffees from "../../data/coffees.json";

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

export function Carousel() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={coffees}
        contentContainerStyle={{ paddingVertical: 16 }}
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.coffeeContainer}>
            <Image
              source={imageMapper[item.imageSrc as keyof typeof imageMapper]}
              style={styles.coffeeImage}
            />
            <Text>{item.title}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
