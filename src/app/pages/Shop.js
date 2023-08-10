import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Shop() {
  const allProducts = useSelector(state => state.products.allProducts)
  console.log(allProducts);

  return (
    <div>
      <Navbar />
      Shop
      <div className='card-container'>
        {allProducts.map((product) => (
          <div key={product.id} className='card-outer'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;