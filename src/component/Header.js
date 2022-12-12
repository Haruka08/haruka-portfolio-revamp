import React, { useState } from 'react';
import Navigation from './Navigation';

import '../css/header.css'

// const styles = {
//   headerStyle: {
//     background: 'Grey',
//     height: 50,
//   },
//   headingStyle: {
//     color: 'black',
//     padding: 10,
//   },
// };

// A single Header component that appears on multiple pages
export default function Header() {
  return (
    <div>
      <header className="custom-header">
        <h2 className="custom-h2">Haruka's Portfolio</h2>
      </header>
      <Navigation />
    </div>
  );
}



