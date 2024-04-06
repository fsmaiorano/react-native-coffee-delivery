import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Coffee } from "../../context/AppContext";

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
    <View>
      <Image
        source={imageMapper[coffee.imageSrc as keyof typeof imageMapper]}
      />
      <Text>{coffee.title}</Text>
      <Text>{coffee.description}</Text>
      <Text>
        <Text>R$ </Text>
        <Text>{handlePrice(coffee.value)}</Text>
      </Text>
    </View>
  );
}
