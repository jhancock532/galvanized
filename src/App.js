import React from 'react';
import ArtistsMenu from './components/ArtistsMenu';
import ShowInformation from './components/ShowInformation';
import ArtistOverview from './components/ArtistOverview';
import './scss/main.scss';
import ARTIST_DETAILS from './artistDetails';

//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isArtistSelected: false, artistSelected: "No Artist Selected"};

    this.setActiveArtist = this.setActiveArtist.bind(this)
  }

  setActiveArtist(artist) {
    this.setState({
      isArtistSelected: true,
      artistSelected: artist
    })
  }

  render() {
    return (
      <div className="App">

        <ArtistsMenu artistDetails={ARTIST_DETAILS} setActiveArtist={this.setActiveArtist}/>
        <ArtistOverview artistDetails={ARTIST_DETAILS} setActiveArtist={this.setActiveArtist}/>

        <ShowInformation />
        
        <h1 className="center">{this.state.artistSelected}</h1>
        
      </div>
    );
  }
}

export default App;
