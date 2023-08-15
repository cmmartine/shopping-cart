import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import ShopProductCard from '../app/components/ShopProductCard';
import { renderWithProviders } from './test_utils/redux-store-test-util';
import { store } from '../app/store';
import { Provider } from 'react-redux';

describe('Shop Product Card', () => {
  const prop = {
    prodName: 'Shoes',
    prodImg: 'Some image',
    prodDesc: 'Very good',
    prodCost: '$49.99',
    numInCart: 0,
    d: 1,
  }

  it('renders correctly', () => {
    const view = renderer
      .create(
        <Provider store={store}>
          <ShopProductCard product={prop} />
        </Provider>
      )
      .toJSON();

      expect(view).toMatchSnapshot();
  });

  it('renders the card passed to it', () => {

    renderWithProviders(<ShopProductCard product={prop} />);

    expect(screen.getByRole('heading').textContent).toMatch('Shoes');
  });
});