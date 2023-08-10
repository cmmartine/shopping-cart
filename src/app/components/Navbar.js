import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <Link to='/' className='nav-link'>Home</Link>
      </div>
      <div className='nav-right'>
        <Link to='/shop' className='nav-link'>Shop</Link>
        <Link to='/cart' className='nav-link'>Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;