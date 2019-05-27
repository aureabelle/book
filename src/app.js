import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';

const App = () => {
  return (
    <div className="app">
      <Search />
    </div>
  );
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
