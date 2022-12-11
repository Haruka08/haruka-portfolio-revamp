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


function Header() {
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

export default Header;