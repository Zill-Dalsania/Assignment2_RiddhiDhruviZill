import React from 'react';
import Footer from '../../Footer/Footer';
import './ShoppingCart.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import EmptyCart from '../../EmptyCart/EmptyCart';
import { useHistory } from 'react-router-dom';

const ShoppingCart = () => {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  if (basket.length < 1) return <EmptyCart />;
  return (
    <>
      <div className='small-container cart-page'>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </table>

        <div className='total-price'>
          <CurrencyFormat
            renderText={(value) => (
              <table>
                <tbody>
                  <tr>
                    <td>Total Items</td>
                    <td>{basket.length}</td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>{value}</td>
                  </tr>
                </tbody>
              </table>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Ksh'}
          />

          <button
            onClick={(e) => history.push('/payment')}
            className='checkout-btn btn'
          >
            Checkout &#8594;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
