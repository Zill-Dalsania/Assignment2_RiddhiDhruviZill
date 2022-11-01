import React from 'react';
import Brand from '../../Brand/Brand';
import ExclusiveProduct from '../../ExclusiveProduct/ExclusiveProduct';
import FeaturedCategories from '../../FeaturedCategories/FeaturedCategories';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

import Sidebar from '../../Sidebar/Sidebar';
import Testimonial from '../../Testimonial/Testimonial';
import Navbar from '../../Navbar/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      <FeaturedCategories />
     
      <ExclusiveProduct />
      <Testimonial />
      <Brand />
      <Footer />
    </>
  );
}

export default HomePage;
