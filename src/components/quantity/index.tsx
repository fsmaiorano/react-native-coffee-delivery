import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Quantity() {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity( quantity > 1 ? quantity - 1 : 1 )}
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
        <TouchableOpacity style={styles.actionButton} onPress={() => setQuantity(0)}>
          <Text style={styles.actionButtonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
