// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from "./component/Header"
import PortfolioContainer from "./page/PortfolioContainer"
import Footer from "./component/Footer"

export default function App() {
  return (
    <div>
      <Header />
        <PortfolioContainer />
      <Footer />
    </div>
  );
}
