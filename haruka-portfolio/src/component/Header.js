import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Project from './Project';

// A single Header component that appears on multiple pages
export default function Header() {
  const [currentPage, setCurrentPage] = useState('Project');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
    </div>
  );
}
