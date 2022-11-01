import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product18 from '../../images/Tshirt1.png';
import product19 from '../../images/sweatpant2.png';
import product20 from '../../images/Tshirts.png';
import product21 from '../../images/shoe.jpg';
import product22 from '../../images/airforce1.png';
import product23 from '../../images/airforce2.png';
import Footer from '../Footer/Footer';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import { products } from '../../data';
import { useStateValue } from '../../StateProvider';

const ProductDetails = () => {
  const [{ basket }, dispatch] = useStateValue();
  const { id, image, title, description, price, rating, halfstar } = products;
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        image: image,
        title: title,
        description: description,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <>
      <div className='small-container single__product'>
        <div className='row'>
          <div className='col-2'>
            <img src={product18} alt='' id='product__img' />

            <div className='small__img__row'>
              <div className='small__img__col'>
                <img src={product19} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={product20} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={product21} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={product22} alt='' />
              </div>
            </div>
          </div>
          <div className='col-2'>
            <p>Home/ T-shirt</p>
            <h1>Read Printed T-shirt by HRX</h1>
            <h4>Ksh {price}</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type='number' value='1' />
            <button to='cart' className='btn' onClick={addToBasket}>
              Add to cart
            </button>
            <h3>
              Product Details
              <div className='rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <i>{<FaStar />}</i>
                  ))}
                <i>{halfstar}</i>
              </div>
            </h3>
            <br />
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className='small-container'>
        <div className='row row-2'>
          <h2>Related Product</h2>
          <p>View more</p>
        </div>
      </div>
      <div className='small-container'>
        <div className='row'>
          <div className='col-4'>
            <Link to='productdetails'>
              <img src={product18} alt='' />
            </Link>
            <h4>Red Printed T-shirt</h4>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <Link to='productdetails'>
              <img src={product19} alt='' />
            </Link>
            <h4>Black shoes</h4>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <p>$10.00</p>
          </div>
          <div className='col-4'>
            <Link to='productdetails'>
              <img src={product20} alt='' />
            </Link>
            <h4>Grey Trouser</h4>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <p>$40.00</p>
          </div>
          <div className='col-4'>
            <Link to='productdetails'>
              <img src={product21} alt='' />
            </Link>
            <h4>Blue Printed T-shirt</h4>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <p>$20.00</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
