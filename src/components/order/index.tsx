import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { CartContext } from "../../context/CartContext";
import type { Coffee } from "../../context/AppContext";

interface IOrder {
  coffee: Coffee;
}

export function Order({ coffee }: IOrder) {
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useContext(CartContext);

  const getAllSizes = () => {
    const sizes = ["114ml", "140ml", "227ml"];
    setSizes(sizes);
  };

  const onSizePress = (index: number, size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      alert("Selecione o tamanho do café antes de adicionar ao carrinho!");
      return;
    }

    addToCart({
      quantity: quantity,
      coffee: coffee,
      size: selectedSize,
    });
  };

  useEffect(() => {
    getAllSizes();
  }, []);

  return (
    <>
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
              item === selectedSize
                ? styles.coffeeSelectedTag
                : styles.coffeeTag
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
      <View style={styles.container}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleAddToCart()}
          >
            <Text style={styles.actionButtonText}>ADICIONAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
