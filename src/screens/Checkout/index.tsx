import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../../styles/theme";
import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext, type CartItem } from "../../context/CartContext";
import { styles } from "./styles";
import { imageMapper } from "../../helpers/image-mapper";

export function Checkout() {
  const { cartItems, handleCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  console.log(cartItems);

  const handleQuantity = (cartItem: CartItem) => {
    const item = cartItems.find(
      (item) => item.coffee.id === cartItem.coffee.id
    );

    handleCartItems(cartItem);
  };

  const handleDecreaseQuantity = (quantity: number) => {};

  const handleIncreaseQuantity = (quantity: number) => {};

  // useEffect(() => {
  //   cartItems.forEach((item) => {
  //     setQuantity(item.quantity);
  //   });
  // }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={THEME.COLORS.GREY_100}
      />
      <ScrollView>
        <View>
          {cartItems.length === 0 ? (
            <Text>Nenhum item no carrinho</Text>
          ) : (
            cartItems?.map((item) => (
              <View key={item.coffee.id + item.size} style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={
                    imageMapper[
                      item.coffee.imageSrc as keyof typeof imageMapper
                    ]
                  }
                />
                <View>
                  <Text>{item.coffee.title}</Text>
                  <Text>{item.size}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() =>
                        handleCartItems(
                          item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        )
                      }
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantity}>{item.quantity}</Text>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() =>
                        handleQuantity({ ...item, quantity: item.quantity + 1 })
                      }
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text>{item.coffee.value}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}
