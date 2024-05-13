import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext, Coffee } from "../../context/AppContext";
import { imageMapper } from "../../helpers/image-mapper";

export function Products() {
  const navigation = useNavigation();
  const { coffees, filteredCoffees } = useContext(AppContext);
  const handlePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const goToDetails = (coffee: Coffee) => {
    navigation.navigate("detail", { coffee });
  };

  return (
    <FlatList
      data={filteredCoffees?.length ? filteredCoffees : coffees}
      renderItem={({ item }) => (
        <Pressable style={styles.card} onPress={() => goToDetails(item)}>
          <View style={styles.imageWrapper}>
            <Image
              source={imageMapper[item.imageSrc as keyof typeof imageMapper]}
              style={styles.coffeeImage}
            />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.coffeeTitle}>{item.title}</Text>
            <Text style={styles.coffeeDescription}>{item.description}</Text>
            <Text>
              <Text style={styles.coffeValuePrefix}>R$ </Text>
              <Text style={styles.coffeeValue}>{handlePrice(item.value)}</Text>
            </Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
