import React from "react";


// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-row-reverse">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">About me</a>


                    <a className="nav-link" href="#">Portfolio</a>


                    <a className="nav-link disabled">Contact</a>

                    
                    <a className="nav-link disabled">Resume</a>            
                </div>
            </div>
        </div>
        </nav>
    );
  }