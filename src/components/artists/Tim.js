import React from 'react';
import ArtistProfile from '../showcase/ArtistProfile';
import VideoEmbed from '../showcase/VideoEmbed';

class Tim extends React.Component {

  render() {
    return (
      <div className="showcase__content Tim-McCarthy">
        <h1 className="showcase__artwork-title">#Hashtag</h1>
        <VideoEmbed url="https://vimeo.com/574152955" subtitle="Gameplay Video"/>

        <p className="showcase__paragraph">
          Your privacy is not respected in the digital realm. Personal data is being collected, 
          analysed, and sold. #Hashtag helps to highlight some of my feelings on the matter, 
          showing that even something as simple as a search can be exploited. In #Hashtag screens 
          that are normally used for advertisements are now showing your search results, though in 
          the real world, screens that usually show us information, are now starting to increasingly 
          show us adverts.
        </p>

        <p className="showcase__paragraph">
          <ul className="showcase__list">
          <li>Headphones are recommended.</li>
          <li>If viewing on the web, please click inside the frame before trying to interact. Downloading is recommended.</li>
          <li>If you are on mobile, or having issues viewing, there is a video provided at the top of this page.</li>
          </ul>
        </p>

        <div className="showcase__four-buttons">
          <a className="button showcase__left-button" rel="noreferrer" href="http://135.125.205.105/hashtag/web/" target="_blank">
            View in Browser
          </a>
          <a className="button showcase__right-button" rel="noreferrer" href="http://135.125.205.105/hashtag/Hashtag_Windows.zip" target="_blank">
            Download (Windows)
          </a>
          <a className="button showcase__left-button" rel="noreferrer" href="http://135.125.205.105/hashtag/Hashtag_Mac.zip" target="_blank">
            Download (Mac)
          </a>
          <a className="button showcase__right-button" rel="noreferrer" href="http://135.125.205.105/hashtag/Hashtag_Linux.tar.gz" target="_blank">
            Download (Linux)
          </a>
        </div>

        <img className="showcase__image" src="../img/tim/banner-image.png" alt="a foggy street cluttered with advertising signs"></img>

        <h1 className="showcase__author-subtitle">By Tim McCarthy</h1>
        <p className="showcase__paragraph">
          I am a 3D artist specialising in hard surface, game friendly digital modelling. 
          With a background in front and back end programming, I try to combine my knowledge 
          of both disciplines to create detailed interactive experiences. My practice mostly 
          involves creating models and textures that are re-creations of real life objects, 
          and simplifying them for use in games and real time media. This has led me to study 
          perception, expectation and simplification, which I try to incorporate into my work. 
          I’m an advocate for privacy, and I do all my work using free and open source software.
        </p>
      </div>
    );
  }
  
}

export default Tim;