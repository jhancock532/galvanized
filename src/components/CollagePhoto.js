import React from 'react';

class CollagePhoto extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    if (this.props.hoveredArtist === this.props.name) {
      this.hoverClass = "collage-photo--hovered";
    } else {
      this.hoverClass = "collage-photo";
    }

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

  //<h1>{(this.props.name === this.props.hoveredArtist) ? "collage-photo--hovered" : "collage-photo"}</h1>

  render(){

    let classNames = this.artistName + "__collage-photo ";
    if (this.props.name === this.props.hoveredArtist) {
      classNames += "collage-photo--hovered";
    } else {
      classNames += "collage-photo";
    } 


    return (
      <div 
        className={classNames}  
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img className={"collage-photo__image"} alt="" src={this.props.photo} />
      </div>
    );
  }
}

export default CollagePhoto;