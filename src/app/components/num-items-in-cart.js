export default function numItemsInCart(items) {
  let sum = 0;
  items.forEach((item) => {
    sum += item.numInCart;
  });
  return sum;
}