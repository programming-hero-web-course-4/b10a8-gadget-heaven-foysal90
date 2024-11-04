const CartItems = ({ item }) => {
  const { title, description, price, image } = item;
  console.log(item);
  return (
    <div>
        
      <div className="w-full h-auto bg-gray-200 p-5 rounded-xl text-black ">
        <div className="flex gap-x-5 flex-col lg:flex-row">
          <img
            src={image}
            className="w-1/3 h-40 rounded-lg shadow-2xl"
            alt="image"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <h1>Price: ${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
