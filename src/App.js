import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
import { CountryBorders } from './components/CountryBorders';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <CountryBorders />
      </div>
    </Provider>
  );
}

export default App;
