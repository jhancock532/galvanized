import React from 'react';
import ArtistsMenu from './components/ArtistsMenu';
import ShowInformation from './components/ShowInformation';
import Guestbook from './components/GuestBook';
//import ArtistOverview from './components/ArtistOverview';
import Collage from './components/Collage';
import './scss/main.scss';
import ARTIST_DETAILS from './artistDetails';
import ArtistShowcase from './components/ArtistShowcase';
import Silhouette from './components/Silhouette';

//<h1 className="center">{this.state.artistSelected}</h1>
//<ArtistOverview artistDetails={ARTIST_DETAILS} setActiveArtist={this.setActiveArtist}/>
        

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistSelected: false, 
      artistSelected: null,
      hoveredArtist: null,
    };

    this.setActiveArtist = this.setActiveArtist.bind(this);
    this.setHoveredArtist = this.setHoveredArtist.bind(this);
    this.resetHoveredArtist = this.resetHoveredArtist.bind(this);
    this.removeActiveArtist = this.removeActiveArtist.bind(this);
  }

  setActiveArtist(artist) {
    this.setState({
      isArtistSelected: true,
      artistSelected: artist
    })
    this.resetHoveredArtist();
  }

  removeActiveArtist() {
    this.setState({
      isArtistSelected: false,
      artistSelected: null
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
          artistSelected={this.state.artistSelected}
        />

        <ShowInformation />
        <ArtistShowcase 
          artistSelected={this.state.artistSelected} 
          removeActiveArtist={this.removeActiveArtist}
        />
        <Guestbook artistSelected={this.state.artistSelected} />
        <Silhouette />
      </div>
    );
  }
}

export default App;
