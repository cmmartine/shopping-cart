import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartProductCard from '../app/components/CartProductCard';
import { renderWithProviders } from './test_utils/redux-store-test-util';
import { store } from '../app/store';
import { Provider } from 'react-redux';

describe('Cart Product Card', () => {
  const product = {
    prodName: 'Shoes',
    prodImg: 'Some image',
    prodDesc: 'Very good',
    prodCost: '$49.99',
    numInCart: 0,
    id: 1,
  }

  const productInCart = {
    prodName: 'Shoes',
    prodImg: 'Some image',
    prodDesc: 'Very good',
    prodCost: '$49.99',
    numInCart: 3,
    id: 1,
  }

  it('renders correctly', () => {

    const view = renderer
      .create(
        <Provider store={store}>
        <CartProductCard product={product}/>
      </Provider>
      )
      .toJSON();
    
      expect(view).toMatchSnapshot();
  });

  it('renders the card passed to it', () => {

    renderWithProviders(<CartProductCard product={product} />);

    expect(screen.getByRole('heading').textContent).toMatch('Shoes');
  });

  it('renders correct quantity when numInCart is 0', () => {

    renderWithProviders(<CartProductCard product={product} />);

    expect(screen.getByText('Quantity: 0')).toBeInTheDocument();
  });

  it('renders correct quantity when numInCart is 3', () => {

    renderWithProviders(<CartProductCard product={productInCart} />);

    expect(screen.getByText('Quantity: 3')).toBeInTheDocument();
  });

});