import { createContext, useContext, useState, useEffect } from "react";
import { getCart } from "./AddToDb";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(getCart().length);

  useEffect(() => {
    const updateCartCount = () => {
      setCartItemsCount(getCart().length);
    };

    return updateCartCount;
  }, []);

  return (
    <CartContext.Provider value={{ cartItemsCount, setCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
