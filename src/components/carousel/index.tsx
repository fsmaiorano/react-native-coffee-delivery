import { useContext } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { AppContext } from "../../context/AppContext";
import { imageMapper } from "../../helpers/image-mapper";
import { styles } from "./styles";

export function Carousel() {
  const { coffees } = useContext(AppContext);

  const handlePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

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

            <View style={styles.coffeContainerTag}>
              {item.tags &&
                item.tags.map((tag, index) => (
                  <View key={index} style={styles.coffeeTag}>
                    <Text style={styles.coffeeTagText}>{tag}</Text>
                  </View>
                ))}
            </View>

            <Text style={styles.coffeeTitle}>{item.title}</Text>
            <Text style={styles.coffeeDescription}>{item.description}</Text>
            <Text>
              <Text style={styles.coffeePricePrefix}>R$ </Text>
              <Text style={styles.coffeePrice}>{handlePrice(item.value)}</Text>
            </Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
