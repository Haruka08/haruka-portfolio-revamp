import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from '../page/Project';

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
