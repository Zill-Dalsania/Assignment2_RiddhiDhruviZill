import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import image1 from '../../../images/hood4.png';
import './AccountPage.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useGlobalContext } from '../../../context';

const AccountPage = () => {
  const { registerForm, setRegisterForm } = useGlobalContext();
  const { loginForm, setLoginForm } = useGlobalContext();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
    //firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
    //firebase register
  };
  const loginBtn = () => {
    setRegisterForm(false);
    setLoginForm(true);
  };
  const registerBtn = () => {
    setRegisterForm(true);
    setLoginForm(false);
  };

  return (
    <>
      <div className='account-page'>
        <div className='form-container'>
          <div className='form-btn'>
            <span onClick={loginBtn}>Login</span>
            <span onClick={registerBtn}>Register</span>
            <hr
              className={`${
                registerForm ? 'indicator show-indicator ' : 'indicator'
              }`}
            />
          </div>
          <form
            action=''
            className={`${
              loginForm ? 'login-form' : 'login-form login-form-show'
            }`}
          >
            <input
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='btn ' onClick={signIn}>
              Login
            </button>
            <Link to=''>Forgot password?</Link>
          </form>
          <form
            action=''
            className={`${
              registerForm ? 'reg-form-show reg-form ' : ' reg-form'
            }`}
          >
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='btn' onClick={register}>
              Register
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AccountPage;
