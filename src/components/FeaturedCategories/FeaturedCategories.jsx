import React from 'react';
import './FeaturedCategories.css';
import { useStateValue } from '../../StateProvider';
import Products from '../Product/Products';

const FeaturedCategories = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='categories'>
      <div className='small-container'>
        <div className='row'>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
