import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/home';
import Header from './components/header';
import Quote from './pages/quote';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
