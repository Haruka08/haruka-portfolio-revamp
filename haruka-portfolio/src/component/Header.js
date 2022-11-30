import React from "react";
import Navigation from "./Navigation"

// A single Header component that appears on multiple pages
export default function Header() {
    return (

    <div>
        <a className="navbar-brand" href="#">Haruka's Profile</a>
        <Navigation />

    </div>
    );
  }