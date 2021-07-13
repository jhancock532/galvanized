import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import Contact from '../showcase/Contact';

class Jack extends React.Component {

  render() {
    return (
      <div className="showcase__content Jack-Myers">
        <h1 className="showcase__artwork-title">The Snow Storm</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=ysz5S6PUM-U" subtitle="Trailer Video"/>

        <h1 className="showcase__author-subtitle">By Jack Myers</h1>
        <p className="showcase__paragraph">
          Jack Myers is a digital media artist and producer. 
          Having previously specialised in illustration, animation and video editing, 
          throughout the MA he has developed skills in game design and development. 
          His latest project “The Snow Storm” is a murder mystery puzzle portrayed in 
          a video game experience, which he wrote and produced alone. His video game work 
          is centred around creating an atmosphere and building 
          a world for the player to enjoy.</p>

        <Contact email="Jack.myers110@gmail.com" instagram="https://www.instagram.com/mack.jyers/" />
      </div>
    );
  }
  
}

export default Jack;