import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import MainBanner from './components/mainBanner';
import Intro from './components/intro';
import Search from './components/search';
import BookPartners from './components/bookPartners';
import Footer from './components/footer';
import MediaPartners from './components/mediaPartners';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainBanner />
      <Intro />
      <Search />
      <BookPartners />
      <Footer />
      <MediaPartners />
    </div>
  );
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
