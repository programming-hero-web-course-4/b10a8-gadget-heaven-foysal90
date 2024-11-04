import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCart, getWishList } from "../../utility/AddToDb";
import CartItems from "../CartItems/CartItems";

const Dashboard = () => {
  const allItemsData = useLoaderData();
  const [cartItem, setCartItem] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [sort, setSort] = useState("");

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
    setShowWishlist(false); 
  };

  const toggleWishlist = () => {
    setShowWishlist((prevShowWishlist) => !prevShowWishlist);
    setShowCart(false);
  };

  //CART ITEMS
  useEffect(() => {
    const storedCartList = getCart();
    const storedCartListInt = storedCartList.map((id) => id);

    const cartList = allItemsData.filter((item) =>
      storedCartListInt.includes(item.id)
    );
    setCartItem(cartList);
  }, [allItemsData]);
  //wish list
  useEffect(() => {
    const storeWishList = getWishList();
    const storeWishListInt = storeWishList.map((id) => id);

    const wishReadList = allItemsData.filter((item) =>
      storeWishListInt.includes(item.id)
    );
    setWishList(wishReadList);
  }, [allItemsData]);
  // Calculate total cost for cart items
  const totalCost = cartItem.reduce((total, item) => total + item.price, 0);

  //sorting by price
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "price") {
      const sortedList = [...cartItem].sort((a, b) => b.price - a.price);
      setCartItem(sortedList);
    }
  };

  return (
    <div>
      <div className="bg-[#9538E2] w-full p-4 text-center">
        <h1>Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </p>
        <button
          onClick={toggleCart}
          className={`mr-2 px-4 py-2 rounded-xl w-20 btn btn-sm ${
            showCart ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          Cart
        </button>
        <button
          onClick={toggleWishlist}
          className={`px-4 py-2 rounded-xl w-20 btn btn-sm ${
            showWishlist ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          Wishlist
        </button>
      </div>

      {showCart && (
        <div className="p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-black">Cart</h1>
            <div className="flex items-center gap-5 mb-2">
              <p className="font-bold text-black">
                Total cost: ${totalCost.toFixed(2)}
              </p>
              <button onClick={() => handleSort("price")} className="btn btn-sm btn-outline border-2 text-purple-800 border-purple-700 ">Sort by Price</button>
              <button className="btn btn-sm">Purchase</button>
            </div>
          </div>
          <div className="space-y-10 px-5">
            {cartItem.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {showWishlist && (
        <div className="p-4 bg-gray-100">
          <h1>Wishlist Content: {wishList.length}</h1>
          <p>Your wishlist items will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
