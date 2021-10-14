import React from 'react';
import ArtistMenuOption from './ArtistMenuOption';

class ArtistsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false}; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.setState(state => ({      
      isMenuOpen: !state.isMenuOpen    
    }));  
  }

  render() {

    const artistMenuOptions = this.props.artistDetails.map((artist) => 
      <ArtistMenuOption 
        key={artist.name} 
        name={artist.name} 
        setActiveArtist={this.props.setActiveArtist} 
        isMenuOpen={this.state.isMenuOpen}
        setHoveredArtist={this.props.setHoveredArtist}
        resetHoveredArtist={this.props.resetHoveredArtist}
        hoveredArtist={this.props.hoveredArtist}
      />
    );

    return (
      <div className="artists-menu">
        <div className="button artists-menu__show-artists-button" onClick={this.handleClick}> 
          {this.state.isMenuOpen ? 'Hide Artists' : 'Show Artists'} 
        </div>

        <div className="artists-menu__options">
          {artistMenuOptions}
        </div>
      </div>
    );
  }
}

export default ArtistsMenu;