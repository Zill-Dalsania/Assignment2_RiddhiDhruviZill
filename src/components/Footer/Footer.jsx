import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col-1'>
            <h3>NEWSLETTER</h3>
            <p>We Love To Share New Offers And Exclusive Promotions</p>
            <form className='footer-form'>
              <input type='text' placeholder='ENTER YOUR E-MAIL ADDRESS' />
              <button type='submit'>
                <i className='fa fa-paper-plane'>
                  <FaPaperPlane />
                </i>
              </button>
            </form>
          </div>

          <div className='footer-col-2'>
            <div className='footer_logo'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>

            <p>
              Our purpose Is To Sustainably Make Your Swag Stand Out from The
              Crowd
            </p>
          </div>
          <div className='footer-col-3'>
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='account'>Account</Link>
              </li>
            </ul>
          </div>
          <div className='footer-col-4'>
            <h3>FOLLOW US</h3>
            <ul>
              <li>
                <Link
                  to={{
                    pathname:
                      'https://www.facebook.com/Swag-Mode-100392718038597',
                  }}
                  target='_blank'
                >
                  Facebook
                </Link>
              </li>

              <li>
                <Link
                  to={{
                    pathname:
                      'https://www.facebook.com/Swag-Mode-100392718038597',
                  }}
                  target='_blank'
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      'https://www.facebook.com/Swag-Mode-100392718038597',
                  }}
                  target='_blank'
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      'https://www.facebook.com/Swag-Mode-100392718038597',
                  }}
                  target='_blank'
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='copyright'>
          Copyright 2020 - Powered by
          <Link
            className='developer'
            to={{
              pathname: 'https://ko-technologies.netlify.com',
            }}
            target='_blank'
          >
            K&O Technologies
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
