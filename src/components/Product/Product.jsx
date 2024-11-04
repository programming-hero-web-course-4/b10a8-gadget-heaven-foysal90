import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const {
    availability,
    category,
    description,
    id,
    image,
    price,
    rating,
    specification,
    title,
  } = product;

  return (
    <div>
      <div className="card  bg-gray-200 text-black w-full h-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl w-full h-52" />
        </figure>
        <div className="card-body items-start ">
          <h2 className="card-title">{title}</h2>
          <p>Price : ${price}</p>
          <div className="card-actions">
            <Link to={`productdetails/${id}`}>
              <button className="btn bg-[#9538E2] hover:bg-[#9538e2d6]  text-purple-200">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
