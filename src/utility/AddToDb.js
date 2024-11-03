import { toast } from "react-toastify";

const getCart = () => {
  const storedCartStr = localStorage.getItem("cart-item");
  if (storedCartStr) {
    const storedCart = JSON.parse(storedCartStr);
    return storedCart;
  } else return [];
};

const addToCart = (id) => {
  const storedCart = getCart();
  if (storedCart.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedCart.push(id);
    const storedCartStr = JSON.stringify(storedCart);
    localStorage.setItem("cart-item", storedCartStr);
    toast("item Added to cart");
  }
};

//wish list
const getWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else return [];
};

const addToWishList = (id) => {
  const cartList = getCart();

  if (cartList.includes(id)) {
    toast.error(
      "This item is already cart and cannot be added to the wishlist."
    );
    return;
  }
  const storedList = getWishList();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast("item Added");
  }
};

export { addToCart, addToWishList, getCart, getWishList };
