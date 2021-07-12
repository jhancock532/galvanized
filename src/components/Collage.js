import React from 'react';
import CollagePhoto from './CollagePhoto';

class Collage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let mobilePhoto = false;
    if (window.innerWidth < 800){
      mobilePhoto = true;
    }

    const collagePhotos = this.props.artistDetails.map((artist) => 
      <CollagePhoto 
        key={artist.name} 
        name={artist.name} 
        photo={artist.image} 
        setActiveArtist={this.props.setActiveArtist}
        setHoveredArtist={this.props.setHoveredArtist}
        resetHoveredArtist={this.props.resetHoveredArtist}
        hoveredArtist={this.props.hoveredArtist}
        artistSelected={this.props.artistSelected}
        mobile={mobilePhoto}
      />
    );

    return (
      <>
        {collagePhotos}
      </>
    );
  }
}

export default Collage;