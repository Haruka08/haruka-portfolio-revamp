import React, { useState } from 'react';
import Navigation from './Navigation';

const styles = {
  headerStyle: {
    background: 'Grey',
    height: 50,
  },
  headingStyle: {
    color: 'black',
    padding: 10,
  },
};

// A single Header component that appears on multiple pages
export default function Header() {
  return (
    <div>
      <header style={styles.headerStyle}>
        <h2 style={styles.headingStyle}>Haruka's Portfolio</h2>
      </header>
      <Navigation />
    </div>
  );
}



