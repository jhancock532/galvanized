import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class James extends React.Component {

  render() {
    return (
      <div className="showcase__content James-Hancock">
        <h1 className="showcase__artwork-title">You Are Online</h1>

        <img className="showcase__image" src="../img/james/darkmode.png" alt="Default User reads alt text. Gets slightly confused."/>

        <p className="showcase__paragraph">
        You Are Online is a interactive website about engaging with the modern internet. 
        You play the role of the Default User, a grey character working productively at a desk, 
        lost in the world of colours and experiences.
        However, as the User discovers, progress isn't always as great as it seems...
        </p>

        
        <p className="showcase__paragraph">
        This website is designed for desktop devices. If you're on a mobile device and curious to see more,
        you can watch an edited playthrough of the experience using the YouTube video below.
        </p>

        <VideoEmbed url="https://www.youtube.com/watch?v=ubBt-ZOB398" subtitle="Playthrough Supercut"/>

        <h1 className="showcase__author-subtitle">Created By James Hancock</h1>
        <ArtistProfile src="../img/james/james.png" alt="James Hancock">
        James Hancock is a creative website developer with a background in computer science 
        and innovation design. James presents the politics of the internet through striking 
        online experiences; from playing with the fundamental operations of the web browser 
        in labyr.in/th/, he’s also created complex 3D scenes in fingerprint.garden and 
        you-are.online. His practice is focused on learning new technologies, preparing 
        him for future work in creative web development. James aims to keep a small digital 
        footprint, recognising the excessive quantities of content already available online. 
        All projects are made on a no-cost basis and are open-sourced for collaborators to 
        contribute to or steal from.
        </ArtistProfile>

        <Contact email="jhancock532@gmail.com" instagram="https://www.instagram.com/jhancock532/" twitter="https://twitter.com/jhancock532" />
        
      </div>
    );
  }
  
}

export default James;