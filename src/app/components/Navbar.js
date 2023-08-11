import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/navbar.css';
import numItemsInCart from "./num-items-in-cart";

function Navbar() {
  const numberInCart = numItemsInCart(useSelector(state => state.products.allProducts));

  return (
    <div className='navbar'>
      <div className='nav-left'>
        <Link to='/' className='nav-link'>Home</Link>
      </div>
      <div className='nav-right'>
        <Link to='/shop' className='nav-link'>Shop</Link>
        <Link to='/cart' className='nav-link'>Cart ({numberInCart})</Link>
      </div>
    </div>
  );
}

export default Navbar;