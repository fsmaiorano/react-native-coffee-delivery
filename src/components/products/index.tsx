import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

import { useEffect, useState } from "react";
import coffees from "../../data/coffees.json";

export function Products() {
  const [tags, setTags] = useState<string[]>([]);

  const getAllTags = () => {
    const tags = [...new Set(coffees.flatMap((coffee) => coffee.tags))];
    setTags(tags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <>
      <Text style={styles.title}>Nossos cafés</Text>
      <FlatList
        horizontal
        data={tags}
        contentContainerStyle={{ paddingVertical: 16 }}
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.coffeeTag}>
            <Text style={styles.coffeeTagText}>{item}</Text>
          </View>
        )}
      ></FlatList>
    </>
  );
}
