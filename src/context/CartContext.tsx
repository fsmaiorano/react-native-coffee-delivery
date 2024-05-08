import { createContext, useState, type ReactNode } from "react";
import type { Coffee } from "./AppContext";

interface ICartContext {
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
}

interface IAppContextProps {
  children: ReactNode;
}

interface CartItem {
  quantity: number;
  coffee: Coffee;
  size: string;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: IAppContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (cartItem: CartItem) => {
    const item = cartItems.find(
      (item) => item.coffee.id === cartItem.coffee.id
    );

    if (item) {
      item.quantity += cartItem.quantity;
    } else {
      setCartItems([...cartItems, cartItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems: [], addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
