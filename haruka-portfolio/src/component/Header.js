import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';

// A single Header component that appears on multiple pages
export default function Header() {
  return (
    <div>
      <Navigation />
    </div>
  );
}



