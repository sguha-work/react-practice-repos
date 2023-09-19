import React from "react";
export function Header({ }) {
  return <header className="main-header">
    <nav className="navbar header-nav navbar-expand-lg one-page-nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="assets/img/logo.svg" title="" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
          <ul className="navbar-nav mx-auto">
            <li><a className="nav-link" data-scroll-nav="0" href="#home"><span>Home</span></a></li>
            <li><a className="nav-link" data-scroll-nav="1" href="#services"><span>Services</span></a></li>
            <li><a className="nav-link" data-scroll-nav="2" href="#skill"><span>Skills</span></a></li>
            <li><a className="nav-link" data-scroll-nav="3" href="#work"><span>Portfolio</span></a></li>
            <li><a className="nav-link" data-scroll-nav="4" href="#contactus"><span>Contact</span></a></li>
          </ul>
        </div>
        <div className="ms-auto d-none d-lg-block">
          <a className="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">Contact Now</a>
        </div>

      </div>
    </nav>
  </header>;
}
