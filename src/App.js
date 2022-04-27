import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Quote from './pages/quote';
import CalculatorPage from './pages/calculator';
import NotFound from './pages/not_found';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
