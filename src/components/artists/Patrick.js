import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Patrick extends React.Component {

  render() {
    return (
      <div className="showcase__content Patrick-Robinson">
        <h1 className="showcase__artwork-title">Homeostat Installation</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=Dk56QLo989E" subtitle="Demonstration Video"/>

        <p className="showcase__paragraph">
        Homeostat Installation is a real-time installation where 
        people’s movements within a gallery space are turned into noise data and then used to 
        drive a point cloud. Two people within the gallery space are made to work together to 
        balance their movement without being able to see each other. The results consider 
        behaviour and interaction with the unknown, directly influenced by the cybernetic 
        machine, the homeostat. </p>

        <p className="showcase__paragraph">
        The spectator’s movements are translated into audio and visuals 
        that are projected into the space. On show in this exhibition is a virtual prototype 
        for the installation, instead of real people’s movement, the virtual characters movement 
        is computer generated in real-time, so in this version of the work the computer 
        is in an unknown dance of agency with itself.
        </p>

        <img className="showcase__image" src="../img/patrick/artwork large.png" alt="Homeostat"/>
        <div className="showcase__image-description">Gallery and pointcloud visualisations on the left, with participant tracking data on the right.</div>
        <div className="showcase__gap"/>

        <h1 className="showcase__author-subtitle">Created By Patrick Robinson</h1>
        
        <ArtistProfile src="../img/patrick/patrick.png" alt="Patrick Robinson">
        Patrick Robinson is an artist and creative technologist. His work often considers 
        behaviour and is drawn from cybernetics. Patrick enjoys working with real-time software 
        so that he is in a collaborative process of trial and error with his computer. 
        This process usually results in interactive installations, data visualisations and 
        audio-visual interactions that relay a process of feedback between himself, the artwork 
        and the audience.
        </ArtistProfile>

        <Contact instagram="https://www.instagram.com/murrma___/" website="https://murr-ma.space" />
        
      </div>
    );
  }
  
}

export default Patrick;