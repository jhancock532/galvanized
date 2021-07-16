import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';
import ArtistProfile from '../showcase/ArtistProfile';
import Contact from '../showcase/Contact';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  '../img/jodie/jodie9.png',
  '../img/jodie/jodie6.png',
  '../img/jodie/jodie2.png',
  '../img/jodie/jodie3.png',
  '../img/jodie/jodie4.png',
  '../img/jodie/jodie5.png',
  '../img/jodie/jodie1.png',
  '../img/jodie/jodie7.png',
  '../img/jodie/jodie8.png'
];

class Jodie extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      lightboxIsOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(event){

    this.setState({
      photoIndex: parseInt(event.target.getAttribute("number")),
      lightboxIsOpen: true,
    })

  }

  render() {
    const { photoIndex, lightboxIsOpen } = this.state;

    return (
      <div className="showcase__content Jodie Hartland">
        <h1 className="showcase__artwork-title">Unearth</h1>

        <img onClick={this.openLightbox} number="0" className="showcase__image" src="../img/jodie/jodie9.png" alt="Fashion editoral cover."/>

        <p className="showcase__paragraph">
        Unearth is a fully digital fashion editorial, exploring how fashion photography is 
        evolving into new areas. Unearth aims to show how this shift into the digital sphere 
        can gives rise to more fantasy and imagination. Fashion models and the digital 
        collection featured are created by Jodie and the original collection is by 
        designer <a href="https://www.instagram.com/hallydesignstuff/" target="_blank" rel="noreferrer"> @hallydesignstuff</a>.
        </p>

        <VideoEmbed url="https://www.youtube.com/watch?v=bCpqJ1gmLKM" subtitle="Editorial Video"/>

        <div className="showcase__two-images">
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="1" className="showcase__image" src="../img/jodie/jodie6.png" alt="Fashion shoot"/>
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="2" className="showcase__image" src="../img/jodie/jodie2.png" alt="Fashion shoot"/>
        </div>
        <div className="showcase__gap"/>
        <div className="showcase__two-images">
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="3" className="showcase__image" src="../img/jodie/jodie3.png" alt="Fashion shoot"/>
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="4" className="showcase__image" src="../img/jodie/jodie4.png" alt="Fashion shoot"/>
        </div>
        <div className="showcase__gap"/>
        <div className="showcase__two-images">
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="5" className="showcase__image" src="../img/jodie/jodie5.png" alt="Fashion shoot"/>
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="6" className="showcase__image" src="../img/jodie/jodie1.png" alt="Fashion shoot"/>
        </div>
        <div className="showcase__gap"/>
        <div className="showcase__two-images">
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="7" className="showcase__image" src="../img/jodie/jodie7.png" alt="Fashion shoot"/>
          <img style={{cursor: "pointer"}} onClick={this.openLightbox} number="8" className="showcase__image" src="../img/jodie/jodie8.png" alt="Fashion shoot"/>
        </div>

        <div className="showcase__gap"/>
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

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }

}

export default Jodie;