import React from 'react';
import HolbertonSchool from '../assets/HolbertonSchool.jpg';
import './Header.css';


function Header() {
  return (
      <div className="App-header">
        <img src={HolbertonSchool} className="App-logo" alt="logo" />
        <h1> School dashboard </h1>
      </div>
  );
}

export default Header;
