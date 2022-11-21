import React from "react";

export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex flex-row-reverse">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">About me</a>
                    <a class="nav-link" href="#">Portfolio</a>
                    <a class="nav-link disabled">Contact</a>
                    <a class="nav-link disabled">Resume</a>            
                </div>
            </div>
        </div>
        </nav>
    );
  }