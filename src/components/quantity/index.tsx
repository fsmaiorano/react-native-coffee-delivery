import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Coffee } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";

interface IQuantity {
  coffee: Coffee;
}

export function Quantity({ coffee }: IQuantity) {
  const [quantity, setQuantity] = useState(1);
  const { cardItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = cardItems.find((item) => item.coffee.id === coffee.id);

    if (item) {
      item.quantity += quantity;
    } else {
      cardItems.push({ quantity, coffee });
    }
  };

  return (
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
  );
}
