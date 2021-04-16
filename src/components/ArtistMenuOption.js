import React from 'react';

class ArtistMenuOption extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);

    this.angleOffset = -1 + Math.random() * 2;

    this.menuOpenStyles = {
      transform: `translateX(${Math.random() * 60}px) rotateZ(${this.angleOffset}deg)`,
      transition: `transform ${0.6 + Math.random() * 0.2}s cubic-bezier(0.435, 0.040, 0.285, 0.995)`
    };

    this.menuClosedStyles = {
      transform: `translateX(${-100 - Math.random() * +60}px) rotateZ(${this.angleOffset}deg)`,
      transition: `transform 0.5s ease`
    };
  }

  handleClick(){
    this.props.setActiveArtist(this.props.name);
  }

  render(){
    return (
      <div className="artist-menu-option" style = {this.props.isMenuOpen ? this.menuOpenStyles : this.menuClosedStyles} onClick = {this.handleClick}>
        <p className="artist-menu-option__text">{this.props.name}</p>
      </div>
    );
  }
}

export default ArtistMenuOption;