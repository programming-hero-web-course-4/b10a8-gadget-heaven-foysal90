import { toast } from "react-toastify";

const getCart = () => {
  const storedCartStr = localStorage.getItem("cart-item");
  return storedCartStr ? JSON.parse(storedCartStr) : [];
};

const addToCart = (id, callback) => {
  const storedCart = getCart();

  if (storedCart.includes(id)) {
    console.log(id, "already exists in the cart");
    return;
  }

  storedCart.push(id);
  localStorage.setItem("cart-item", JSON.stringify(storedCart));
  toast("Item added to cart");

  if (callback) {
    callback(storedCart.length);
  }
};

// Wishlist functions
const getWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToWishList = (id, callback) => {
  const cartList = getCart();

  if (cartList.includes(id)) {
    toast.error(
      "This item is already in the cart and cannot be added to the wishlist."
    );
    return;
  }

  const storedList = getWishList();

  if (storedList.includes(id)) {
    console.log(id, "already exists in the wishlist");
    return;
  }

  storedList.push(id);
  localStorage.setItem("wish-list", JSON.stringify(storedList));
  toast("Item added to wishlist");

  if (callback) {
    callback(storedList.length); // Update wishlist count in context
  }
};

export { addToCart, addToWishList, getCart, getWishList };
