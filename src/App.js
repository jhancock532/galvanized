import React from 'react';
import ArtistsMenu from './components/ArtistsMenu';
import ShowInformation from './components/ShowInformation';
import Guestbook from './components/GuestBook';
import Collage from './components/Collage';
import './scss/main.scss';
import ARTIST_DETAILS from './artistDetails';
import ArtistShowcase from './components/ArtistShowcase';
import InformationPage from './components/InformationPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistSelected: false, 
      artistSelected: null,
      hoveredArtist: null,
      noScroll: false,
      showInformation: false,
    };

    this.setActiveArtist = this.setActiveArtist.bind(this);
    this.setHoveredArtist = this.setHoveredArtist.bind(this);
    this.resetHoveredArtist = this.resetHoveredArtist.bind(this);
    this.removeActiveArtist = this.removeActiveArtist.bind(this);
    this.setNoScroll = this.setNoScroll.bind(this);
    this.toggleShowInformation = this.toggleShowInformation.bind(this);
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

  setNoScroll(value) {
    this.setState({
      noScroll: value
    })
  }

  toggleShowInformation(){
    this.setState(state => ({
      showInformation: !state.showInformation
    }));
  }

  render() {

    if (this.state.noScroll) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }

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

        <ShowInformation toggleShowInformation={this.toggleShowInformation}/>
        { this.state.showInformation ? 
        <InformationPage toggleShowInformation={this.toggleShowInformation}/>
        : null }

        <ArtistShowcase 
          artistSelected={this.state.artistSelected} 
          removeActiveArtist={this.removeActiveArtist}
        />
        <Guestbook artistSelected={this.state.artistSelected} setNoScroll={this.setNoScroll}/>
      </div>
    );
  }
}

export default App;
