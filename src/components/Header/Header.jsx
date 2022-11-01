import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className='hero'>
      <div className='section__center'>
        <div className='hero__container'>
          <h1>
            Welcome To <span>Integro</span> <br />
            Wears<span>.</span>
          </h1>
          <p>
            Switch Your Swag Mode On
            <br /> & Dress like you already famous
          </p>
          <div>
            <Link to='/products' className='btn'>
              Explore Now &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
