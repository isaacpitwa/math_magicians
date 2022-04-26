import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/home';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="calculator" component={<Calculator />} />
      </Routes>
    );
  }
}

export default App;
