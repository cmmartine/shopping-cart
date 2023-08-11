import { useDispatch } from "react-redux";
import { increment, decrement } from "../../features/productSlice";

function CartProductCard(props) {

  const {prodName, prodImg, prodCost, numInCart, id} = props.product;

  const dispatch = useDispatch();

  return(
    <div className='cart-card-inner'>

      <img src={prodImg} alt={prodName} />

      <div className='prod-info-container'>
        <h3 className='prod-name'>{prodName}</h3>

        <p className='prod-cost'>{prodCost}</p>
      </div>
      
      <div className='count-container'>
        <div>Quantity: {numInCart}</div>
        <div className='count-buttons-container'>
          <button className='cart-amount-button' aria-label='decrement' onClick={() => dispatch(decrement(id))}>-</button>
          <button className='cart-amount-button' aria-label='increment' onClick={() => dispatch(increment(id))}>+</button>
        </div>
      </div>

    </div>
  );
}

export default CartProductCard;