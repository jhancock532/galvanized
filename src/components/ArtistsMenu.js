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
    return (
      <div className="artists-menu">
        <div className="artists-menu__button" onClick={this.handleClick}> {this.state.isMenuOpen ? 'Hide Artists' : 'Show Artists'} </div>

        <div className={this.state.isMenuOpen ? 
                        'artists-menu__options artists-menu__options--open': 
                        'artists-menu__options artists-menu__options--open'}>

          <ArtistMenuOption name={"Jodie Hartland"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen}/>
          <ArtistMenuOption name={"James Hancock"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Fraser Owens"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Chonlachat Srisompetch"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Tiarnan McCarthy"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Ena Koitabashi"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Patrick Robinson"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Jiaxian Liang"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Jack Myers"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Omar Hamouda"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Molly Stanners Putland"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Ches Wintie"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
          <ArtistMenuOption name={"Eille Robinson"} setActiveArtist={this.props.setActiveArtist} isMenuOpen={this.state.isMenuOpen} />
        </div>
      </div>
    );
  }
}

export default ArtistsMenu;