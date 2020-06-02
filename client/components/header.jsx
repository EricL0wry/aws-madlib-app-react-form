import React from 'react';

function Header(props) {

  return (
    <nav className="navbar header">
      <div className="container">
        <div className="row justify-content-center col-12">
          <span className="navbar-brand mb-0 h1"><i className="fas fa-mobile-alt"></i>  Dial-A-MadLib!</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
