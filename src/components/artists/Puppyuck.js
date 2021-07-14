import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Puppyuck extends React.Component {

  render() {
    return (
      <div className="showcase__content Puppyuck">
        <h1 className="showcase__artwork-title">Evangeline</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=qzYU-RZ_Yo0"/>
        <div className="showcase__gap"/>
        <VideoEmbed url="https://www.youtube.com/watch?v=OP0xyd0l68E"/>

        <p className="showcase__paragraph"></p>

        <h1 className="showcase__author-subtitle">Created By Puppyuck</h1>
        <ArtistProfile src="../img/puppyuck/puppyuck.png" alt="Puppyuck">
          
        </ArtistProfile>

        <Contact instagram="https://www.instagram.com/puppyuck/" />
        
      </div>
    );
  }
  
}

export default Puppyuck;