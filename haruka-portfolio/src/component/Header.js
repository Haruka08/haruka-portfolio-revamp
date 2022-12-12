import React, { useState } from 'react';
import Navigation from './Navigation';

// A single Header component that appears on multiple pages
export default function Header() {
  return (
    <div>
      <header>Haruka's Portfolio</header>
      <Navigation />
    </div>
  );
}



