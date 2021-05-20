import React from 'react';
import ArtistMenuOption from './ArtistMenuOption';

class ArtistsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.setState(state => ({      
      isMenuOpen: !state.isMenuOpen    
    }));  
  }

  render() {
    //This creates all the artist options in the menu
    const artistMenuOptions = this.props.artistDetails.map((artist) => 
      <ArtistMenuOption key={artist.name} name={artist.name} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen}/>
    );

    return (
      <div className="artists-menu">
        <div className="artists-menu__button" onClick={this.handleClick}> 
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