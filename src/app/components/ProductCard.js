import { useDispatch } from "react-redux";
import { increment } from "../../features/productSlice";

function ProductCard(props) {

  const {prodName, prodImg, prodDesc, prodCost, numInCart, id} = props.product;

  const dispatch = useDispatch();

  return(
    <div className='card-inner'>

      <img src={prodImg} alt={prodName} />

      <div className='prod-info-container'>
        <h3 className='prod-name'>{prodName}</h3>

        <p className='prod-desc'>{prodDesc}</p>

        <p className='prod-cost'>{prodCost}</p>
      </div>

      <div className='cart-count-container'>
        <div>In cart: {numInCart}</div>
        <button aria-label='increment' onClick={() => dispatch(increment(id))}>Add to Cart</button>
      </div>

    </div>
  );
}

export default ProductCard;