import React from 'react';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';

class Jodie extends React.Component {

  render() {
    return (
      <div className="showcase__content Jodie Hartland">
        <h1 className="showcase__artwork-title">Intermedium</h1>

        <img className="showcase__image" src="../img/jodie/artwork.png" alt="Jodie's artwork."/>

        <p className="showcase__paragraph">
        
        </p>

        
        <h1 className="showcase__author-subtitle">Created By Jodie Hartland</h1>
        <ArtistProfile src="../img/jodie/jodie.png" alt="Jodie Hartland">
        </ArtistProfile>

        <Contact instagram="https://www.instagram.com/_jhartart/" />
      </div>
    );
  }

}

export default Jodie;