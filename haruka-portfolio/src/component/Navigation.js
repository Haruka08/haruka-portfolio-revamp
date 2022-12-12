import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import About from '../component/About';
import Contact from '../component/Contact';
import Project from '../component/Project';
import Resume from '../component/Resume';

// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

export default function Navigation() {
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
        {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        {/* <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About me</a>

                <a onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                >Project</a>

                <a onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>

                <a onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>           
            </div>
        </nav> */}

        <Navbar bg="light" variant="light">
            <Container>
            {/* <Navbar.Brand href="#home">Menu</Navbar.Brand> */}
            <Nav className="me-auto">
                <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About me</Nav.Link>
                <Nav.Link href="#project" onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>Project</Nav.Link>
                <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
}





// export default function Navigation({ currentPage, handlePageChange }) {
//     return (
//         <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid d-flex flex-row-reverse">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>

//         </div>
//         </nav>
//     );
//   }