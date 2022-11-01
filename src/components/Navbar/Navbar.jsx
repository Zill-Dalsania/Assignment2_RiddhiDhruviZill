import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { IoIosBasket } from 'react-icons/io';
import logo from '../../images/logo.png';
import { useGlobalContext } from '../../context';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Navbar = () => {
  const history = useHistory();
  const { openSidebar } = useGlobalContext();
  const { checkActive } = useGlobalContext();
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} className='nav-logo' alt='' />
        </Link>

        <ul className='nav-links'>
          <li>
            <button className='link-btn'>
              <Link to='/'>Home</Link>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <Link to='/products'>Products</Link>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <Link to='/payment'>Checkout</Link>
            </button>
          </li>
        </ul>

        <div className='right__item'>
          <Link to={!user && '/account'}>
            <button className='btn signin-btn' onClick={handleAuthentication}>
              {user ? 'Log out' : 'Log in'}
            </button>
          </Link>

          <div className='nav-container'>
            <IoIosBasket
              className='cart'
              style={{
                fontSize: '25px',
              }}
              onClick={(e) => history.push('/cart')}
            />

            <div className='amount-container'>
              <p>{basket?.length}</p>
            </div>
          </div>
          <FaAlignRight
            className='toggle-btn'
            style={{
              fontSize: '25px',
            }}
            onClick={openSidebar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
