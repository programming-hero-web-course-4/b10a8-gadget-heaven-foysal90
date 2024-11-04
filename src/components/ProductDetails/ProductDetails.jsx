import { useLoaderData, useParams } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";

import { useCart } from "../../utility/CartContext";
import { addToCart, addToWishList } from "../../utility/AddToDb";

const ProductDetails = () => {
  const { id } = useParams();
  const productData = useLoaderData();
  const product = productData.find((product) => product.id === id);
  const { setCartItemsCount, setWishlistCount } = useCart(); // Get context functions to update counts

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    image,
    title,
    price,
    availability,
    rating,
    description,
    specification,
  } = product;
  const priceFloat = parseFloat(price).toFixed(2);

  const handleAddCart = (id) => {
    addToCart(id, (newCount) => {
      setCartItemsCount(newCount);
    });
  };

  const handleWishList = (id) => {
    addToWishList(id);
    setWishlistCount((prev) => prev + 1); // Increment wishlist count after adding an item
  };

  return (
    <div className="relative bg-[#9538E2] h-96 flex items-center justify-center mb-96">
      <div className="text-center text-white z-10 space-y-4 px-4 -mt-60">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <span className="block text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </span>
      </div>

      <div className="absolute top-28">
        <div className="bg-white text-black border rounded-xl mt-7 ">
          <div className="flex flex-col lg:flex-row w-full p-5">
            <img
              src={image}
              alt={title}
              className="w-4/5 h-auto rounded-lg"
            />
            <div className="flex flex-col justify-center p-5">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="py-2">${priceFloat}</p>
              <p className="bg-green-400 rounded-xl border-green-200 px-2 text-sm text-center w-32 py-1">
                {availability}
              </p>
              <p className="py-6">{description}</p>
              <h2 className="text-xl font-bold mt-4">Specifications</h2>
              <ol className="list-disc list-inside mt-2 mx-2">
                {specification.map((spec, index) => (
                  <li key={index} className="py-1">
                    {spec}
                  </li>
                ))}
              </ol>

              <p className="py-2 flex items-center">
                Rating
                <FaStar className="text-orange-500" />
              </p>
              <div className="rating my-1">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <span className="mx-2 bg-gray-200 w-10 px-2 rounded-xl">
                  {rating}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => handleAddCart(id)}
                    className="relative btn btn-sm w-32 mt-5 bg-purple-600 text-white"
                  >
                    Add To Cart
                  </button>
                  <BsCartCheckFill className="absolute top-7 left-[108px] text-white" />
                </div>
                <button
                  onClick={() => handleWishList(id)}
                  className="btn btn-sm bg-white mt-5 rounded-full"
                >
                  <FcLikePlaceholder />
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
