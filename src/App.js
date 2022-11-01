import React, { useEffect } from 'react';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountPage from './components/Pages/AccountPage/AccountPage';
import HomePage from './components/Pages/HomePage/HomePage';
import ShoppingCart from './components/Pages/ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Payment from './components/Pages/Payment/Payment';

const promise = loadStripe(
  'pk_test_51Hrf8PJNLaQB7IjEatkaccHHfMuozeQvdwLEHiNNtrqSaJTuV305bDdCqnYrFszE4QyxDa8w2gUh4VkJrmaMc5zd00AAKciwe5'
);

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is ====', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/products'>
          <ProductPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
        <Route path='/cart'>
          <Elements stripe={promise}>
            <ShoppingCart />
          </Elements>
        </Route>
        <Route path='/payment'>
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path='/productdetails'>
          <ProductDetails />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
