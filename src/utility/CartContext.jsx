import { createContext, useContext, useState, useEffect } from "react";
import { getCart, getWishList } from "./AddToDb";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(getCart().length);
  const [wishlistCount, setWishlistCount] = useState(getWishList().length); // Add wishlist count

  useEffect(() => {
    const updateCartCount = () => {
      setCartItemsCount(getCart().length);
    };

    const updateWishlistCount = () => {
      setWishlistCount(getWishList().length); // Update wishlist count
    };

    updateCartCount();
    updateWishlistCount();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        setCartItemsCount,
        wishlistCount,
        setWishlistCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
