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
     
      <div className="card  bg-gray-200 text-black w-full shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl"  />
        </figure>
        <div className="card-body items-start ">
          <h2 className="card-title">{title}</h2>
          <p>Price : ${price}</p>
          <div className="card-actions">
            <Link to={`productdetails/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


