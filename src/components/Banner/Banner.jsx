import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative bg-[#9538E2] h-96 flex items-center justify-center">
      <div className="text-center text-white z-10 space-y-4 px-4">
        <h1 className="text-2xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <span className="block text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </span>
        <div>
          <Link to='/dashboard'>
            <button className="btn btn-sm bg-white text-[#9538E2] rounded-xl mt-5">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute top-72  flex items-center justify-center  ">
        <img
          className="max-w-full h-60 object-cover"
          src="../../src/assets/banner.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
