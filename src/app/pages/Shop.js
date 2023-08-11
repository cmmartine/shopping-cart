import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ShopProductCard from "../components/ShopProductCard";
import '../styles/product-card.css';

function Shop() {
  const allProducts = useSelector(state => state.products.allProducts)

  return (
    <div>
      <Navbar />
      Shop
      <div className='card-container'>
        {allProducts.map((product) => (
          <div key={product.id} className='card-outer'>
            <ShopProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;