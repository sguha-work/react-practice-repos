import React from "react";
export function Footer({ }) {
  return <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 py-2">
          <div className="nav justify-content-center justify-content-md-start">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="col-md-6 py-2 text-center text-md-end">
          <p className="m-0">© 2022 copyright all right reserved</p>
        </div>
      </div>
    </div>
  </footer>;
}
