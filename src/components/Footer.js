import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img className="footer__logo" src="../img/logos.png" alt="Galvanized logo"/>
        <p  className="footer__small">
        Copyright reserved to respective owners. 
        There are no cookies on this website.
        Galvanized 2021
        </p> 
      </footer>
    );
  }
}

export default Footer;