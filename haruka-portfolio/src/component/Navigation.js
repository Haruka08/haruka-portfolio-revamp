import React from "react";


// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
export default function Navigation({ currentPage, handlePageChange }) {
    return (
        // <nav className="navbar navbar-expand-lg">
        // <div className="container-fluid d-flex flex-row-reverse">
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        //     </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a onClick={() => handlePageChange('Home')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >About me</a>

                    <a onClick={() => handlePageChange('Home')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                    >Project</a>

                    <a onClick={() => handlePageChange('Home')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact</a>

                    <a onClick={() => handlePageChange('Home')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume</a>           
                </div>
            </div>
        // </div>
        // </nav>
    );
  }