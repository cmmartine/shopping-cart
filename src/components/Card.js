function Card(props) {

  const {prodName, prodImg, prodDesc, prodCost, numInCart} = props.product;

  return(
    <div className='card-inner'>

      <img src={prodImg} alt={prodName} />

      <h3 className='prod-name'>{prodName}</h3>

      <p className='prod-desc'>{prodDesc}</p>

      <p className='prod-cost'>{prodCost}</p>

    </div>
  );
}

export default Card;