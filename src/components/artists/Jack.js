import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import Contact from '../showcase/Contact';
import ArtistProfile from '../showcase/ArtistProfile';

class Jack extends React.Component {

  render() {
    return (
      <div className="showcase__content Jack-Myers">
        <h1 className="showcase__artwork-title">The Snow Storm</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=SdICPi_0vi0" subtitle="Trailer Video"/>

        <p className="showcase__paragraph">
        “The Snow Storm” is an interactive, Swiss themed, murder mystery game experience. 
        The game is set in a castle in a mountainous regionin the Alps in a period between the
        1930’s and 1950’s. The narrative combines complete wackiness with Swiss folklore and 
        extraterrestrial sightings around the area which it is based.
        
        The journey hints at the supernatural. So, what lies beyond the castle...?
        </p>

        <h1 className="showcase__author-subtitle">Created By Jack Myers</h1>
        <ArtistProfile src="../img/jack/jack.png" alt="Jack Myers">
        Jack Myers is a digital media artist and producer. 
          Having previously specialised in illustration, animation and video editing, 
          throughout the MA he has developed skills in game design and development. 
          His latest project “The Snow Storm” is a murder mystery puzzle portrayed in 
          a video game experience, which he wrote and produced alone. His video game work 
          is centred around creating an atmosphere and building 
          a world for the player to enjoy.
        </ArtistProfile>

        <Contact email="Jack.myers110@gmail.com" instagram="https://www.instagram.com/mack.jyers/" />
      </div>
    );
  }
  
}

export default Jack;