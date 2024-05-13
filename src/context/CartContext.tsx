import { createContext, useState, type ReactNode } from "react";
import type { Coffee } from "./AppContext";

interface ICartContext {
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  handleCartItems: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
}

interface IAppContextProps {
  children: ReactNode;
}

export interface CartItem {
  quantity: number;
  coffee: Coffee;
  size: string;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: IAppContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (cartItem: CartItem) => {
    const item = cartItems.find(
      (item) =>
        item.coffee.id === cartItem.coffee.id && item.size === cartItem.size
    );

    if (item) {
      item.quantity += cartItem.quantity;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, cartItem]);
    }
  };

  const handleCartItems = (cartItem: CartItem) => {
    const item = cartItems.find(
      (item) =>
        item.coffee.id === cartItem.coffee.id && item.size === cartItem.size
    );

    if (item) {
      item.quantity = cartItem.quantity;
    }

    setCartItems([...cartItems]);
  };

  const removeCartItem = (cartItem: CartItem) => {
    const newCartItems = cartItems.filter(
      (item) =>
        item.coffee.id !== cartItem.coffee.id || item.size !== cartItem.size
    );

    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, handleCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
