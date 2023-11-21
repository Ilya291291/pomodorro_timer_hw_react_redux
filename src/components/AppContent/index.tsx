import React from 'react';
import './index.css';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const AppContent = () => {
  return (
    <div className='appcontent_wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default AppContent