import { FlatList, Text } from "react-native";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

export function Sizes() {
  const { coffees, applyFilter } = useContext(AppContext);
  const [sizes, setSizes] = useState<string[]>([]);

  const getAllSizes = () => {
    const sizes = ["114ml", "140ml", "227ml"];
    setSizes(sizes);
  };

  const onSizePress = (index: number, size: string) => {
    const selectedSize = sizes[index];
    // handleSizeSelection(size);
    // if (selectedSize === "TODOS") {
    //   if (applyFilter) {
    //     applyFilter([]);
    //   }
    //   return;
    // }

    if (applyFilter) {
      applyFilter([selectedSize]);
    }
  };

  useEffect(() => {
    getAllSizes();
  }, []);

  return (
    <FlatList
      horizontal
      data={sizes}
      contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 25 }}
      snapToAlignment="center"
      decelerationRate="fast"
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => <Text>{item}</Text>}
    />
  );
}
