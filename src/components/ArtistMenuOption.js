import React from 'react';

class ArtistMenuOption extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.angleOffset = -1 + Math.random() * 2;

    this.menuOpenStyles = {
      opacity: 1,
      transform: `translateX(${Math.random() * 20}px) rotateZ(${this.angleOffset}deg)`,
      transition: `transform ${0.6 + Math.random() * 0.2}s cubic-bezier(0.435, 0.040, 0.285, 0.995), opacity 0.5s ease`
    };

    this.menuClosedStyles = {
      opacity: 0,
      transform: `translateX(${-10 - Math.random() * 20}px) rotateZ(${this.angleOffset}deg)`,
      transition: `transform 0.5s ease, opacity 0.5s ease`
    };
  }

  handleClick(){
    this.props.setActiveArtist(this.props.name);
  }

  handleMouseEnter(){
    this.props.setHoveredArtist(this.props.name);
  }

  handleMouseLeave(){
    this.props.resetHoveredArtist();
  }

  render(){

    let styling;

    if (this.props.isMenuOpen) {
      styling = this.menuOpenStyles;
    } else {
      styling = this.menuClosedStyles;
    }

    if (this.props.hoveredArtist === this.props.name){
      styling = this.menuOpenStyles;
    }

    return (
      <div 
        className="artist-menu-option" 
        style={styling} 
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <p className="artist-menu-option__text">{this.props.name}</p>
      </div>
    );
  }
}

export default ArtistMenuOption;