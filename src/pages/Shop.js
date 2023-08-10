import { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Shop() {
  const allProducts = [
    {
      prodName: 'Shoes',
      prodImg: 'Some image',
      prodDesc: 'Very good',
      prodCost: '$49.99',
      numInCart: 0,
      listItemId: 1,
    },
    {
      prodName: 'Shirt',
      prodImg: 'Some image',
      prodDesc: 'Quality fabric',
      prodCost: '$19.99',
      numInCart: 0,
      listItemId: 2,
    }
  ];

  const [products, setProducts] = useState(allProducts);

  return (
    <div>
      <Navbar />
      Shop
      <div className='card-container'>
        {products.map((product) => (
          <div key={product.listItemId} className='card-outer'>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;