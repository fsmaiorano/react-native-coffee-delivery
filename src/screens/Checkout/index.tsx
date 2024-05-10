import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../../styles/theme";
import { useContext } from "react";
import { CartContext, type CartItem } from "../../context/CartContext";
import { styles } from "./styles";
import { imageMapper } from "../../helpers/image-mapper";
import { Trash } from "phosphor-react-native";

export function Checkout() {
  const { cartItems, handleCartItems, removeCartItem } =
    useContext(CartContext);

  const handlePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const handleQuantity = (cartItem: CartItem) => {
    handleCartItems(cartItem);
  };

  const removeItem = (cartItem: CartItem) => {
    removeCartItem(cartItem);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={THEME.COLORS.GREY_100}
      />
      <ScrollView>
        <View style={styles.container}>
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
                  <Text style={styles.cardTitle}>{item.coffee.title}</Text>
                  <Text style={styles.cardSize}>{item.size}</Text>
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

                    <TouchableOpacity style={styles.trashButton} onPress={() => removeItem(item)}>
                      <Trash size={24} color={THEME.COLORS.PURPLE_500} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.cardPrice}>
                  R$ {handlePrice(item.coffee.value * item.quantity)}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}
