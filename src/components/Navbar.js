import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  );
}

export default Navbar;