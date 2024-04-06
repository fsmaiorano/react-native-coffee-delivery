import { FlatList, Text, TouchableOpacity } from "react-native";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { styles } from "./styles";

export function Tags() {
  const { coffees } = useContext(AppContext);
  const [tags, setTags] = useState<string[]>([]);

  const getAllTags = () => {
    const tags = [...new Set(coffees.flatMap((coffee) => coffee.tags))];
    setTags(tags);
  };

  const onTagPress = (index: number) => {
    console.log(index);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <>
      <FlatList
        horizontal
        data={tags}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 25 }}
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={styles.coffeeTag}
            onPress={() => onTagPress(index)}
          >
            <Text style={styles.coffeeTagText}>{item}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </>
  );
}
