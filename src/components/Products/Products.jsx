import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

       
        const uniqueCategories = [];
        data.forEach((product) => {
          if (!uniqueCategories.includes(product.category)) {
            uniqueCategories.push(product.category);
          }
        });
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
   <div>
    <h1 className="text-3xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
     <div className="flex">
     
     <div className="w-2/12 p-4 ">
      
       <div className="flex flex-col gap-2">
       <button
           className="btn bg-gray-300 mt-2 w-full"
           onClick={() => setSelectedCategory(null)}
         >
           All Product
         </button>
         {categories.map((category, index) => (
           
           <button
             key={index}
             className="btn bg-purple-500 text-white w-full"
             onClick={() => setSelectedCategory(category)}
           >
             {category}
           </button>
         ))}
         
       </div>
     </div>

     
     <div className="w-10/12 p-4">
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {filteredProducts.length > 0 ? (
           filteredProducts.map((product) => (
             <div key={product.id} className="m-2">
               <Product product={product} />
             </div>
           ))
         ) : (
           <div className="col-span-full text-center">
             <h2>No products found in this category.</h2>
           </div>
         )}
       </div>
     </div>
   </div>
   </div>
  );
};

export default Products;
