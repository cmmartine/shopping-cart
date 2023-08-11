import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";

function Cart() {
  const cartProducts = selectItemsInCart(useSelector(state => state.products.allProducts));

  function selectItemsInCart(items) {
    let inCart = []
    items.forEach((item) => {
      if (item.numInCart > 0) {
        inCart.push(item);
      }
    })
    return inCart;
  }

  return (
    <div>
      <Navbar />
      Your Cart
      <div className='cart-card-container'>
        {cartProducts.map((product) => (
          <div key={product.id} className='cart-card-outer'>
            <CartProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;