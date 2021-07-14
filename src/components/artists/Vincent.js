import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Vincent extends React.Component {

  render() {
    return (
      <div className="showcase__content Vincent-Keep">
        <h1 className="showcase__artwork-title">Haresmede</h1>
        <VideoEmbed url="https://player.vimeo.com/video/574218903" subtitle="Trailer Video"/>

        <p className="showcase__paragraph">
        Haresmede is a virtual installation inspired by the history and folklore of the New Forest. 
        It presents artifacts of both historical stories and fantastical ones through the use of 3D 
        scanned objects and entirely digitally created visual elements, alongside sound composed of 
        both field recordings and artificially synthesized sound. This work aims to blur the 
        boundaries of what is considered real by paralleling the tensions between fact and fiction 
        with the integration of realistic and digital aesthetics.
        </p>

        <div className="showcase__center-button">
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1VKfeFUbTt8uRmcM3RhCJrZ-h1mjAFMwr?usp=sharing" className="button">Installation Download Links</a>
        </div>

        <div className="showcase__gap"/>

        <h1 className="showcase__author-subtitle">Created By Vincent Keep</h1>
        <ArtistProfile src="../img/vincent/vincent-small.png" alt="Photo of Vincent Keep">
        Vincent Keep creates a range of digital work informed by a background in sound and noise
         art, and previous experience as a performance artist. His work abstracts queer 
         aesthetics and wider academic research through experimental approaches to his use of
          technology. While a key focus in his work remains on the use of sound, Vincent 
          explores a range of mediums such as visual data manipulation, 3D art, and game 
          development technologies.
        </ArtistProfile>

        

        <Contact email="hello@vincentkeep.com" instagram="https://www.instagram.com/vincentkeep/" />
        
      </div>
    );
  }
  
}

export default Vincent;