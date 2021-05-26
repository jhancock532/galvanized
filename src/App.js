import React from 'react';
import ArtistsMenu from './components/ArtistsMenu';
import ShowInformation from './components/ShowInformation';
//import ArtistOverview from './components/ArtistOverview';
import Collage from './components/Collage';
import './scss/main.scss';
import ARTIST_DETAILS from './artistDetails';

//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />


//<ArtistOverview artistDetails={ARTIST_DETAILS} setActiveArtist={this.setActiveArtist}/>
        

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistSelected: false, 
      artistSelected: "No Artist Selected",
      hoveredArtist: null,
    };

    this.setActiveArtist = this.setActiveArtist.bind(this);
    this.setHoveredArtist = this.setHoveredArtist.bind(this);
    this.resetHoveredArtist = this.resetHoveredArtist.bind(this);
  }

  setActiveArtist(artist) {
    this.setState({
      isArtistSelected: true,
      artistSelected: artist
    })
  }

  setHoveredArtist(artist) {
    this.setState({
      hoveredArtist: artist
    })
  }

  resetHoveredArtist() {
    this.setState({
      hoveredArtist: null
    })
  }

  render() {
    return (
      <div className="App">

        <ArtistsMenu 
          artistDetails={ARTIST_DETAILS} 
          setActiveArtist={this.setActiveArtist}
          setHoveredArtist={this.setHoveredArtist}
          resetHoveredArtist={this.resetHoveredArtist}
          hoveredArtist={this.state.hoveredArtist}
        />
        
        <Collage 
          artistDetails={ARTIST_DETAILS} 
          setActiveArtist={this.setActiveArtist} 
          setHoveredArtist={this.setHoveredArtist}
          resetHoveredArtist={this.resetHoveredArtist}
          hoveredArtist={this.state.hoveredArtist}
        />

        <ShowInformation />
        
        <h1 className="center">{this.state.artistSelected}</h1>
        
      </div>
    );
  }
}

export default App;
