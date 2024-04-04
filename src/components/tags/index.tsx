import { FlatList, Text, View } from "react-native";

import { useEffect, useState } from "react";
import coffees from "../../data/coffees.json";
import { styles } from "./styles";

export function Tags() {
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
      <FlatList
        horizontal
        data={tags}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 25}}
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
function useEffeact(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
