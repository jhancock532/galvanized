import React from 'react';

class CollagePhoto extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.hoverDisplayStyles = {
      opacity: 1,
      pointerEvents: "all",
      transition: `opacity 0.5s ease`
    };

    this.hoverHideStyles = {
      opacity: 0,
      pointerEvents: "none",
      transition: `opacity 0.5s ease`
    };

    this.artistName = this.props.name.replace(" ", "-");

  }

  handleMouseEnter(){
    this.props.setHoveredArtist(this.props.name);
  }

  handleMouseLeave(){
    this.props.resetHoveredArtist();
  }

  handleClick(){
    this.props.setActiveArtist(this.props.name);
  }

  render(){

    const collagePhotoClassNames = "collage-photo " + this.artistName + "__collage-photo";

    let photoHoverStyling;
    if (this.props.name === this.props.hoveredArtist) {
      photoHoverStyling = this.hoverDisplayStyles;
    } else {
      photoHoverStyling = this.hoverHideStyles;
    }

    let selectionHoverStyling;
    if (this.props.name === this.props.hoveredArtist) {
      selectionHoverStyling = { zIndex: 100 }
    }

    if (this.props.artistSelected === null) {
      return (
        <div 
          className={collagePhotoClassNames}  
          style={selectionHoverStyling}
        >
          <img 
            className={"collage-photo__image"} 
            alt="" 
            src={this.props.photo} 
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <img 
            style={photoHoverStyling} 
            className={"collage-photo__hover-image"}
            alt=""
            src={this.props.photo}
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CollagePhoto;