import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ArtistsMenu from './components/ArtistsMenu';
import ArtistShowcase from './components/ArtistShowcase';
import Guestbook from './components/GuestBook';
import Collage from './components/Collage';

import ARTIST_DETAILS from './artistDetails'; //JSON data
import './scss/main.scss'; //All components styled from the /scss folder

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistSelected: false, 
      artistSelected: null,
      hoveredArtist: null,
      noScroll: false,
      showAboutPage: false,
    };

    this.setActiveArtist = this.setActiveArtist.bind(this);
    this.setHoveredArtist = this.setHoveredArtist.bind(this);
    this.resetHoveredArtist = this.resetHoveredArtist.bind(this);
    this.removeActiveArtist = this.removeActiveArtist.bind(this);
    this.setNoScroll = this.setNoScroll.bind(this);
    this.toggleAboutPage = this.toggleAboutPage.bind(this);
  }

  setActiveArtist(artist) {

    let artistURL = null;
    for (let i = 0; i < ARTIST_DETAILS.length; i++){
      if (ARTIST_DETAILS[i].name === artist){
        artistURL = "/" + ARTIST_DETAILS[i].url;
        break;
      }
    }

    window.location.pathname = artistURL;
  }

  removeActiveArtist() {
    window.location.pathname = "/";
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

  toggleAboutPage(){
    this.setState(state => ({
      showAboutPage: !state.showAboutPage,
      noScroll: !state.showAboutPage
    }));
  }

  componentDidMount() {
    if (window.location.pathname !== "/"){

      //For the final show live view & presentations.
      //if (window.location.pathname === "/zoom"){
      //  window.location.href="https://zoom.us/j/9646433419";
      //}

      if (window.location.pathname === "/about"){
        this.setState(state => ({
          showAboutPage: !state.showAboutPage,
          noScroll: !state.showAboutPage
        }));
      }

      let name = window.location.pathname.substring(1); //removes backslash at start

      let selectedArtist = null;
      for (let i = 0; i < ARTIST_DETAILS.length; i++){
        if (ARTIST_DETAILS[i].url === name){
          selectedArtist = ARTIST_DETAILS[i].name;
          break;
        }
      }

      if (selectedArtist !== null){
        this.setState({
          isArtistSelected: true,
          artistSelected: selectedArtist
        })
        
        this.resetHoveredArtist();
      }

    }
  }

  render() {

    if (this.state.noScroll) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }

    return (
      <div className="App">

        <Header toggleAboutPage={this.toggleAboutPage}/>

        { this.state.showAboutPage ? 
        <AboutPage toggleAboutPage={this.toggleAboutPage}/>
        : null }

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

        <ArtistShowcase 
          artistSelected={this.state.artistSelected} 
          removeActiveArtist={this.removeActiveArtist}
        />

        <Guestbook 
          artistSelected={this.state.artistSelected} 
          setNoScroll={this.setNoScroll}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
