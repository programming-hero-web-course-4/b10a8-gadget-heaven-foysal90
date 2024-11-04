import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getCart, getWishList } from "../../utility/AddToDb";
import CartItems from "../CartItems/CartItems";
import { FcApproval } from "react-icons/fc";

const Dashboard = () => {
  const allItemsData = useLoaderData();
  const [cartItem, setCartItem] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [sort, setSort] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal visibility

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

  //WISHLIST ITEMS
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

  // Sorting by price
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
            showCart
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 hover:bg-blue-500 text-black"
          }`}
        >
          Cart
        </button>
        <button
          onClick={toggleWishlist}
          className={`px-4 py-2 rounded-xl w-20 btn btn-sm ${
            showWishlist
              ? "bg-blue-500 text-white  hover:bg-blue-600"
              : "bg-gray-300  hover:bg-blue-500 text-black"
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
              <button
                onClick={() => handleSort("price")}
                className="btn btn-sm btn-outline border-2 text-purple-800 border-purple-700 "
              >
                Sort by Price
              </button>
              <button
                onClick={() => setShowModal(true)} // Open modal on click
                className="btn btn-sm bg-[#9c41e8] hover:bg-[#9538E2] rounded-3xl text-white"
              >
                Purchase
              </button>
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
          <h1 className="font-bold text-black">Wishlist</h1>
          <div className="space-y-10 px-5">
            {wishList.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Modal Structure */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box text-center bg-white p-6  rounded-md shadow-lg">
            <FcApproval className="text-5xl w-12 mx-auto" />
            <h3 className="text-3xl pb-2 font-bold border-b-2">
              Payment Successfully
            </h3>
            <p className="py-2">Thanks for purchasing.</p>
            <p >Total: ${totalCost.toFixed(2)}</p>
            <div className="modal-action">
              <Link to='/'
                onClick={() => setShowModal(false)}
                className="btn btn-sm w-full rounded-xl bg-purple-500 text-white  mx-auto"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
