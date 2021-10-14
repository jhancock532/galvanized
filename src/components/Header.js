import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          <img className="header__logo" src="../img/galvanised-logo.png" alt="Galvanised logo"/>
        </div>
        <div className="header__description">
          <p>Digital Media Arts 2021</p>
          <p>Master's Degree Exhibition</p>
          <p>University of Brighton</p>
          <button onClick={this.props.toggleShowInformation} className="button button--small header__button">Exhibition Information</button>
        </div>
      </div>
    );
  }
}

export default Header;