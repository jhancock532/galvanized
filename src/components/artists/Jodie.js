import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Jodie extends React.Component {

  //<img className="showcase__image" src="../img/jodie/artwork.png" alt="Jodie's artwork."/>


  render() {
    return (
      <div className="showcase__content Jodie Hartland">
        <h1 className="showcase__artwork-title">Unearth</h1>

        <VideoEmbed url="https://www.youtube.com/watch?v=AGiCytgWeAc" subtitle="Final Piece"/>

        <p className="showcase__paragraph">
        Unearth is a fully digital fashion editorial, exploring how fashion photography is 
        evolving into new areas. Unearth aims to show how this shift into the digital sphere 
        can gives rise to more fantasy and imagination. Fashion models and the digital 
        collection featured are created by Jodie and the original collection is by 
        designer <a href="https://www.instagram.com/hallydesignstuff/" target="_blank" rel="noreferrer"> @hallydesignstuff</a>.
        </p>

        <h1 className="showcase__author-subtitle">Created By Jodie Hartland</h1>
        <ArtistProfile src="../img/jodie/jodie.png" alt="Jodie Hartland">
    Jodie comes from a fashion photography background and has a mix-media portfolio of work. 
    An aspiring visual artist who is currently exploring the intersection between tech and 
    fashion, Jodie is learning new ways to express the playfulness of image making through 3D 
    and interactive art. 
        </ArtistProfile>

        <Contact 
        instagram="https://www.instagram.com/_jhartart/"
        email="jodiehartland@hotmail.co.uk" 
        website="http://jodiehartland.com/main/"
        />
      </div>
    );
  }

}

export default Jodie;