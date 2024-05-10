import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { THEME } from "../../styles/theme";
import { useContext, useRef } from "react";
import { CartContext, type CartItem } from "../../context/CartContext";
import { styles } from "./styles";
import { imageMapper } from "../../helpers/image-mapper";
import { Trash } from "phosphor-react-native";
import { Swipeable } from "react-native-gesture-handler";

export function Checkout() {
  const { cartItems, handleCartItems, removeCartItem } =
    useContext(CartContext);
  const swipeableRefs = useRef<Swipeable[]>([]);

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
      <ScrollView style={styles.container}>
        <View>
          {cartItems.length === 0 ? (
            <Text>Nenhum item no carrinho</Text>
          ) : (
            cartItems?.map((item) => (
              <Swipeable
                ref={(ref) => {
                  if (ref) {
                    swipeableRefs.current.push(ref);
                  }
                }}
                key={item.coffee.id + item.size}
                containerStyle={styles.swipeableContainer}
                friction={0.5}
                overshootLeft={false}
                leftThreshold={10}
                renderRightActions={() => null}
                onSwipeableOpen={() => removeItem(item)}
                renderLeftActions={() => (
                  <Pressable
                    style={styles.swipeableRemove}
                    onPress={() => removeItem(item)}
                  >
                    <Trash size={36} color={THEME.COLORS.GREY_100} />
                  </Pressable>
                )}
              >
                <View style={styles.card}>
                  <View style={styles.cardImageWrapper}>
                    <Image
                      style={styles.cardImage}
                      source={
                        imageMapper[
                          item.coffee.imageSrc as keyof typeof imageMapper
                        ]
                      }
                    />
                  </View>
                  <View style={styles.cardContentWrapper}>
                    <View>
                      <Text style={styles.cardTitle}>{item.coffee.title}</Text>
                      <Text style={styles.cardSize}>{item.size}</Text>
                    </View>
                    <View style={styles.actionsWrapper}>
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
                            handleQuantity({
                              ...item,
                              quantity: item.quantity + 1,
                            })
                          }
                        >
                          <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={styles.trashButton}
                        onPress={() => removeItem(item)}
                      >
                        <Trash size={24} color={THEME.COLORS.PURPLE_500} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cardPriceWrapper}>
                    <Text style={styles.cardPrice}>
                      R$ {handlePrice(item.coffee.value * item.quantity)}
                    </Text>
                  </View>
                </View>
              </Swipeable>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}
