import React from 'react';


import FeaturedCategories from '../../FeaturedCategories/FeaturedCategories';

import Header from '../../Header/Header';

import Sidebar from '../../Sidebar/Sidebar';

import Navbar from '../../Navbar/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      <FeaturedCategories />
      
    </>
  );
}

export default HomePage;
