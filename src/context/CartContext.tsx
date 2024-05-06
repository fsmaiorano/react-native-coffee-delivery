import { createContext, type ReactNode } from "react";
import type { Coffee } from "./AppContext";

interface ICartContext {
  cardItems: CartItem[];
}

interface IAppContextProps {
  children: ReactNode;
}

interface CartItem {
  quantity: number;
  coffee: Coffee;
  size: "114ml" | "140ml" | "227ml";
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: IAppContextProps) {
  return (
    <CartContext.Provider value={{ cardItems: [] }}>
      {children}
    </CartContext.Provider>
  );
}
