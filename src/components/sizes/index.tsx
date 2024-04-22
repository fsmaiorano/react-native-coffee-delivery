import { FlatList, Text, TouchableOpacity } from "react-native";

import { useEffect, useState } from "react";
import { styles } from "./styles";

export function Sizes() {
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("");

  const getAllSizes = () => {
    const sizes = ["114ml", "140ml", "227ml"];
    setSizes(sizes);
  };

  const onSizePress = (index: number, size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    getAllSizes();
  }, []);

  return (
    <FlatList
      horizontal
      scrollEnabled={false}
      data={sizes}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
      snapToAlignment="center"
      decelerationRate="fast"
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          style={
            item === selectedSize ? styles.coffeeSelectedTag : styles.coffeeTag
          }
          onPress={() => onSizePress(index, item)}
        >
          <Text
            style={
              item === selectedSize
                ? styles.coffeeSelectedTagText
                : styles.coffeeTagText
            }
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
